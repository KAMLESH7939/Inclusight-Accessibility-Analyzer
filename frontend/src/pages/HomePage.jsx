import React, { useState } from "react";
import Footer from "../components/Footer.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card.tsx";
import {
  BarChart3,
  Users,
  FileSearch,
  Target,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import AnalyzeForm from "../components/AnalyzeForm";
import AnalysisResults from "../components/AnalysisResults";
import About from "./About";
import Testimonials from "./Testimonials";
import { CheckCircle, Shield, Eye, Star } from "lucide-react";
const HomePage = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [analysisId, setAnalysisId] = useState(null);

  const handleAnalyze = async (url) => {
    if (!url) {
      setResults(null);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (data.success) {
        setResults(data); // ✅ Set all results
        setAnalysisId(data.analysisId); // ✅ Extract and store ID separately
      } else {
        setError("No results returned.");
        setResults(null);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (id) => {
    if (!id) {
      alert("No analysis ID found. Please analyze a website first.");
      return;
    }

    try {
      const response = await fetch(
        `/api/analyze/download/${id}`
      );
      if (!response.ok) throw new Error("Failed to download report");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `accessibility-report-${id}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to download report.");
    }
  };
  // const handleDownload = async () => {
  //   if (!analysisId) {
  //     alert("No analysis ID found. Please analyze a website first.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`/api/analyze/download/${analysisId}`);

  //     if (!response.ok) throw new Error("Failed to download report");

  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);

  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = `accessibility-report-${analysisId}.csv`;
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //     window.URL.revokeObjectURL(url);
  //   } catch (err) {
  //     alert("Error downloading report");
  //     console.error(err);
  //   }
  // };

  return (
    // >>>>>>>>>> UI 1
    // <div className="min-h-screen pt-[6rem]">
    // <section className="max-w-6xl h-[70vh] mx-auto text-center">
    // <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
    // Accessibility Analyzer
    // </h1>
    // <p className="text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto">
    // Enter a website URL below to assess its accessibility. We'll check contrast, font size, labels, and more using Lighthouse and axe-core.
    // </p>

    //     <div className="w-full max-w-4xl mx-auto">
    //       <AnalyzeForm onAnalyze={handleAnalyze} loading={loading} />
    //     </div>

    //     {error && <p className="text-red-500 mt-4">{error}</p>}

    //     {results && !loading && (
    //       <div className="mt-12">
    //         <AnalysisResults results={results} onDownload={handleDownload} />
    //       </div>
    //     )}
    //   </section>
    //   <About/>
    //   <Testimonials/>
    // </div>
    // >>>>>>>>> UI 2

    /* <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center">
              <Play className="w-3 h-3 fill-current" />
            </div>
            Explore a 14 day free trial
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">70k</div>
            <div className="text-xs text-gray-500">Downloads</div>
          </div>
        </div>

  
        <div className="grid lg:grid-cols-2 gap-12 items-center">
       
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-8">
                Financial<br />
                Tracking<br />
                Platform
              </h1>
              
              <div className="flex gap-4 items-center">
                <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Try for free
                </button>
                <button className="flex items-center gap-2 text-gray-700 underline hover:text-gray-900">
                  <Play className="w-4 h-4" />
                  See demo
                </button>
              </div>
            </div>

    
            <div className="bg-gray-400/30 backdrop-blur-sm rounded-2xl p-6 max-w-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">1 million +</div>
              <div className="text-gray-700">Every month cashback for our clients</div>
              <div className="mt-4 flex items-center gap-2">
                <Repeat className="w-5 h-5 text-gray-600" />
                <div className="h-px bg-gray-400 flex-1"></div>
              </div>
            </div>
          </div>

      
          <div className="relative">
           
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded text-sm font-mono">
                + ***
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              
              <div className="mt-8 mb-4">
                <div className="text-gray-800 font-medium">Take your</div>
                <div className="text-gray-800 font-medium">expenses</div>
                <div className="text-gray-800 font-medium">under control</div>
              </div>
              
        
              <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 bg-amber-600 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-amber-800 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 top-1/2 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center">
                <div className="relative">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-4 bg-gray-800 origin-bottom"
                      style={{
                        transform: `rotate(${i * 15}deg) translateY(-20px)`,
                        left: '50%',
                        bottom: '50%'
                      }}
                    />
                  ))}
                  <div className="w-2 h-2 bg-gray-800 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

      
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
                <path
                  d="M20 20 Q 100 40 180 20"
                  stroke="#d1d5db"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-8 mt-16">
        
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <Repeat className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Subscriptions</h3>
            </div>
            <p className="text-gray-700">
              Make your money analysis faster and create smarter way of saving on payments.
            </p>
          </div>

    
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Mobile Application</h3>
            </div>
            <p className="text-gray-700">
              Shows income, expenses, credit score, savings goals, net worth, investments management.
            </p>
          </div>
        </div>
      </div>
    </div> */
    //>>>>>>>>>>>>>>> UI 3
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden px-6 py-16 relative">

    //     {/* Glow background circle */}
    //     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    //       <div className="w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
    //     </div>

    //     {/* Hero Content */}
    //     <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
    //       <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    //         Build. <span className="text-indigo-400">Audit.</span> Improve.
    //       </h1>
    //       <p className="text-lg text-slate-300 max-w-2xl mx-auto">
    //         Analyze your website’s accessibility with real-time audits powered by axe-core & Lighthouse.
    //       </p>

    //       {/* Buttons */}
    //       <div className="flex justify-center gap-4 mt-6 flex-wrap">
    //         <a
    //           href="/analyze"
    //           className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
    //         >
    //           Start Audit
    //         </a>
    //         <a
    //           href="#demo"
    //           className="flex items-center gap-2 px-5 py-3 rounded-full border border-slate-500 hover:border-white text-slate-300 hover:text-white transition"
    //         >
    //           <Play className="w-4 h-4" />
    //           See Demo
    //         </a>
    //       </div>
    //     </div>

    //     {/* Floating Left Card */}
    //     <div className="absolute top-24 left-4 md:left-16 w-64 p-4 bg-slate-800/70 backdrop-blur-md rounded-xl shadow-lg">
    //       <div className="flex items-center gap-3">
    //         <Eye className="w-6 h-6 text-indigo-400" />
    //         <h3 className="font-semibold text-white">Contrast Checks</h3>
    //       </div>
    //       <p className="text-sm text-slate-400 mt-2">
    //         Auto detect poor color contrast based on WCAG standards.
    //       </p>
    //     </div>

    //     {/* Floating Right Card */}
    //     <div className="absolute top-72 right-4 md:right-16 w-64 p-4 bg-slate-800/70 backdrop-blur-md rounded-xl shadow-lg">
    //       <div className="flex items-center gap-3">
    //         <Code className="w-6 h-6 text-pink-400" />
    //         <h3 className="font-semibold text-white">Code Insights</h3>
    //       </div>
    //       <p className="text-sm text-slate-400 mt-2">
    //         Get line-level suggestions for ARIA roles, alt tags & more.
    //       </p>
    //     </div>

    //      <DotLottieReact
    //     src="https://lottie.host/910acadc-0741-40e5-91bc-b810db20c456/p8fhfYMdxF.lottie"
    //     loop
    //     autoplay
    //   />
    //   </div>
    <>
      <div className="relative overflow-hidden mt-[5rem]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="pt-16  pb-24 md:pt-16 md:pb-32">
            {/* <DotLottieReact
              src="https://lottie.host/3dee3fd5-d505-4045-97ab-e7ae4d767481/1apqJbY5nT.lottie"
              loop
              autoplay
            /> */}
            {/* <DotLottieReact
              src="https://lottie.host/6fd9a77b-e83f-4303-989c-8c289d6ad800/m3vqpAuvix.lottie"
              loop
              autoplay
            /> */}
            <div className="text-center max-w-5xl mx-auto">
              {/* <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered Accessibility Analysis
              </Badge> */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  mb-6 leading-tight">
                Make the Web
                <span className="grade1"> Accessible </span>
                for Everyone
              </h1>
              <DotLottieReact
                src="https://lottie.host/6fd9a77b-e83f-4303-989c-8c289d6ad800/m3vqpAuvix.lottie"
                loop
                autoplay
              />

              <p className="text-xl md:text-2xl opacity-[0.95] mb-8 mt-3 max-w-3xl mx-auto leading-relaxed text-justify">
                "Built for developers, our analyzer uses Lighthouse and axe-core
                to detect accessibility issues — from contrast and font sizes to
                label structure — while identifying barriers that affect users
                with disabilities."
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
               k0-i-9
              </div> */}
              <div className="w-full max-w-4xl mx-auto mt-5 mb-12">
                <AnalyzeForm onAnalyze={handleAnalyze} loading={loading} />
              </div>

              {error && <p className="text-red-500 mt-4">{error}</p>}

              {results && !loading && (
                <div className="mt-12">
                  <AnalysisResults
                    analysisId={analysisId}
                    results={results}
                    onDownload={handleDownload}
                  />
                </div>
              )}

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mt-4">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>WCAG 2.1 AA Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        {/* Features Section */}
        <section
          id="features"
          className="mb-5 mt-3 px-4 max-w-7xl mx-auto space-y-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Powerful <span className="grade1">Accessibility</span> <span className="grade1">Analysis</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive tools to identify, understand, and resolve
                accessibility barriers across your entire digital ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <FileSearch className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-700 dark:text-white">
                    Automated Scanning
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-slate-300">
                    Continuously monitor your websites and applications for
                    accessibility violations with our AI-powered scanning
                    engine.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-700 dark:text-white">
                    Detailed Reports
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-slate-300">
                    Get comprehensive accessibility reports with actionable
                    insights, priority levels, and step-by-step remediation
                    guides.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-700 dark:text-white">
                    WCAG Compliance
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-slate-300">
                    Ensure full compliance with WCAG 2.1 AA/AAA standards and
                    other international accessibility guidelines.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-700 dark:text-white">
                    Progress Tracking
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-slate-300">
                    Monitor your accessibility improvements over time with
                    detailed analytics and progress dashboards.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-700 dark:text-white">
                    Real-time Alerts
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-slate-300">
                    Get instant notifications when new accessibility issues are
                    detected before they impact your users.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-700 dark:text-white">
                    Team Collaboration
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-slate-300">
                    Work together with your team to resolve accessibility issues
                    with built-in collaboration and workflow tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
