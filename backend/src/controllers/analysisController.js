// import { URL } from 'url';
// import lighthouse from 'lighthouse';
// import * as chromeLauncher from 'chrome-launcher';
// import puppeteer from 'puppeteer';
// import { AxePuppeteer } from '@axe-core/puppeteer';
// import Analysis from '../models/Analysis.js';
// import { generateCsvFromAnalysis } from '../utils/reportGenerator.js';

// // @desc Run accessibility analysis on a given URL using Lighthouse & axe-core
// // @route POST /api/analyze
// // @access Public
// export async function analyzeWebsite(req, res) {
// try {
// const { url } = req.body;

// // Validate URL
// if (!url) {
//   return res.status(400).json({ success: false, message: 'URL is required' });
// }
// new URL(url); // Throws if invalid

// // Launch Chrome for Lighthouse
// const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

// const options = {
//   logLevel: 'info',
//   output: 'json',
//   onlyCategories: ['accessibility'],
//   port: chrome.port,
// };

// const runnerResult = await lighthouse(url, options);
// const lighthouseReport = JSON.parse(runnerResult.report);
// await chrome.kill();

// // Launch Puppeteer browser for axe-core
// const browser = await puppeteer.launch({ headless: 'new' });
// const page = await browser.newPage();
// await page.goto(url, { waitUntil: 'networkidle0' });

// const axeResult = await new AxePuppeteer(page).analyze();
// await browser.close();

// // Create and save the analysis document in MongoDB
// const newAnalysis = new Analysis({
//   url,
//   timestamp: new Date(),
//   summary: {
//     score: lighthouseReport.categories.accessibility.score * 100,
//     totalViolations: axeResult.violations.length,
//   },
//   details: {
//     lighthouse: {
//       score: lighthouseReport.categories.accessibility.score * 100,
//       audits: lighthouseReport.audits,
//     },
//     axe: axeResult,
//   },
// });

// const saved = await newAnalysis.save();

// // Compute violation summaries for frontend UI
// const violations = axeResult.violations || [];

// const contrastCount = violations.filter(v => v.id.includes('color-contrast')).length;
// const fontSizeCount = violations.filter(v => v.id.includes('font-size')).length;
// const labelCount = violations.filter(
//   v => v.id.includes('label') || v.id.includes('aria')
// ).length;

// const recommendations = violations
//   .map(v => v.help)
//   .filter(Boolean)
//   .slice(0, 5);

// // Final response to client
// res.status(200).json({
//   success: true,
//   analysisId: saved._id,
//   score: lighthouseReport.categories.accessibility.score * 100,
//   issues: {
//     contrast: contrastCount,
//     fontSize: fontSizeCount,
//     labels: labelCount,
//   },
//   passedChecks: axeResult.passes?.length || 0,
//   recommendations,
//   violations: axeResult.violations, // Full detailed issues for frontend
// });
// } catch (error) {
// console.error('Error analyzing site:', error.message);
// res.status(500).json({
// success: false,
// message: 'Analysis failed',
// error: error.message,
// });
// }
// }

// // @desc Download CSV report of analysis
// // @route GET /api/analyze/download/:id
// // @access Public
// export async function downloadCsvReport(req, res) {
// try {
// const { id } = req.params;
// const analysisDoc = await Analysis.findById(id);

// if (!analysisDoc) {
//   return res.status(404).json({ error: 'Analysis not found' });
// }

// const csv = generateCsvFromAnalysis(analysisDoc);

// res.setHeader('Content-Type', 'text/csv');
// res.setHeader(
//   'Content-Disposition',
//   `attachment; filename="report-${id}.csv"`
// );
// res.send(csv);
// } catch (error) {
// console.error('CSV generation error:', error.message);
// res.status(500).json({ error: 'CSV report generation failed' });
// }
// }





import { URL } from 'url';
import { AxePuppeteer } from '@axe-core/puppeteer';
import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';
import lighthouse from 'lighthouse';
import Analysis from '../models/Analysis.js';
import { generateCsvFromAnalysis } from '../utils/reportGenerator.js';

export async function analyzeWebsite(req, res) {
try {
const { url } = req.body;
if (!url) {
return res.status(400).json({ success: false, message: 'URL is required' });
}

// Validate URL format
new URL(url);

// Launch headless Chromium (compatible with serverless)
const browser = await puppeteer.launch({
  args: chrome.args,
  executablePath: await chrome.executablePath || '/usr/bin/chromium-browser',
  headless: chrome.headless,
});

const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

// Run axe-core
const axeResult = await new AxePuppeteer(page).analyze();

// Run Lighthouse via CDP (Chrome DevTools Protocol)
const session = await page.target().createCDPSession();
const { port } = new URL(browser.wsEndpoint());

const options = {
  logLevel: 'info',
  output: 'json',
  onlyCategories: ['accessibility'],
  port,
};

const runnerResult = await lighthouse(url, options);
const lighthouseReport = JSON.parse(runnerResult.report);

await browser.close();

// Save result to MongoDB
const newAnalysis = new Analysis({
  url,
  timestamp: new Date(),
  summary: {
    score: lighthouseReport.categories.accessibility.score * 100,
    totalViolations: axeResult.violations.length,
  },
  details: {
    lighthouse: {
      score: lighthouseReport.categories.accessibility.score * 100,
      audits: lighthouseReport.audits,
    },
    axe: axeResult,
  },
});

const saved = await newAnalysis.save();

// Extract summary details for frontend
const violations = axeResult.violations || [];
const contrastCount = violations.filter(v => v.id.includes('color-contrast')).length;
const fontSizeCount = violations.filter(v => v.id.includes('font-size')).length;
const labelCount = violations.filter(
  v => v.id.includes('label') || v.id.includes('aria')
).length;

const recommendations = violations.map(v => v.help).filter(Boolean).slice(0, 5);

res.status(200).json({
  success: true,
  analysisId: saved._id,
  score: lighthouseReport.categories.accessibility.score * 100,
  issues: {
    contrast: contrastCount,
    fontSize: fontSizeCount,
    labels: labelCount,
  },
  passedChecks: axeResult.passes?.length || 0,
  recommendations,
  violations: axeResult.violations,
});
} catch (error) {
console.error('Error analyzing site:', error.message);
res.status(500).json({
success: false,
message: 'Analysis failed',
error: error.message,
});
}
}

export async function downloadCsvReport(req, res) {
try {
const { id } = req.params;
const analysisDoc = await Analysis.findById(id);
if (!analysisDoc) {
return res.status(404).json({ error: 'Analysis not found' });
}

const csv = generateCsvFromAnalysis(analysisDoc);
res.setHeader('Content-Type', 'text/csv');
res.setHeader('Content-Disposition', `attachment; filename="report-${id}.csv"`);
res.send(csv);
} catch (error) {
console.error('CSV generation error:', error.message);
res.status(500).json({ error: 'CSV report generation failed' });
}
}