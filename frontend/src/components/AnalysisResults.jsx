import React from "react";
import { FaStaylinked } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const AnalysisResults = ({ results, analysisId, onDownload }) => {
  if (!results) return null;
  // https://www.traversy.dev
  const {
    score = 0,
    issues = {},
    passedChecks = 0,
    recommendations = [],
    violations = [],
  } = results;

  const { contrast = 0, fontSize = 0, labels = 0 } = issues;

  return (
    <div className="bg-slate-900 text-white rounded-lg p-8 max-w-6xl mx-auto mt-8 shadow-lg ">

       <DotLottieReact
      src="https://lottie.host/f57c34ad-9e15-430b-bfed-5e4cb773bb88/Lw6qM7F1to.lottie"
      loop
      autoplay
    />

      <h2 className="text-5xl p-5 font-bold mb-10 text-center">
        <span className="grade1">Analysis</span> Results
      </h2>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-8 text-center">
        <div className="bg-blue-600 py-10 px-8 rounded">
          <p className="text-2xl text-white font-semibold">
            Accessibility Score
          </p>
          <p className="text-2xl font-bold ">{score}</p>
        </div>
        <div className="bg-green-600 py-10 px-8 rounded">
          <p className="text-2xl font-semibold">Contrast Issues</p>
          <p className="text-2xl font-bold ">{contrast}</p>
        </div>
        <div className="bg-yellow-600 py-10 px-8 rounded">
          <p className="text-2xl font-semibold ">Font Size Issues</p>
          <p className="text-2xl font-bold ">{fontSize}</p>
        </div>
        <div className="bg-orange-600 py-10 px-8 rounded">
          <p className="text-2xl font-semibold">Label Issues</p>
          <p className="text-2xl font-bold ">{labels}</p>
        </div>
        <div className="bg-red-600 py-10 px-8 rounded">
          <p className="text-2xl font-semibold">Passed Checks</p>
          <p className="text-2xl font-bold ">{passedChecks}</p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-6 mt-16 text-center">
        <div className="mb-8">
          <span className="text-4xl font-bold grade1">Recommendations</span>
        </div>

        {recommendations.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No specific recommendations available.
          </p>
        ) : (
          <ul className="text-lg space-y-2 ">
            {recommendations.map((rec, idx) => (
              <li key={idx} className="text-gray-300">
                • {rec}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Violations Section */}
      {violations.length > 0 && (
        <div className="mt-10">
        
          <div className="text-4xl font-bold mb-10 text-center">
            <span className="grade1">Accessibility</span> Violations
          </div>
          <ul className="space-y-10 mt-3">
            {violations.map((v, idx) => (
              <li key={idx} className="bg-slate-700 p-10 rounded shadow-md">
                <p className="font-bold text-pink-400 text-3xl mb-2">
                  {v.help}
                </p>
                <p className="text-xl text-gray-200 mb-1">{v.description}</p>
                <p className="text-xl text-blue-300 italic mb-2">
                  <span className="text-pink-400">CODE</span>{" "}
                  <span className="text-white">:</span> {v.id}
                </p>

                {v.helpUrl && (
                  <div className="mb-2 flex justify-center items-center gap-1">
                    <FaLink className="text-white" />
                    <a
                      href={v.helpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-xl underline mb-2 cursor-pointer"
                    >
                      Learn more
                    </a>
                  </div>
                )}

                {/* Affected selectors */}
                {v.nodes?.length > 0 && (
                  <div className="text-xs text-gray-300 mb-2">
                    <p className="font-semibold italic text-xl text-pink-400 mb-2">
                      Affected Selector(s):
                    </p>
                    <ul className="list-disc list-inside text-lg">
                      {v.nodes.map((node, i) => (
                        <li key={i}>{node.target?.[0]}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="font-semibold italic text-xl text-pink-400 mb-2">
                  HTML Snippet:
                </p>
                {/* HTML snippet */}
                {v.nodes?.[0]?.html && (
                  <pre className="bg-slate-900 text-lg px-3 py-1 mb-5 rounded overflow-x-auto text-white mt-2">
                    {v.nodes[0].html}
                  </pre>
                )}
                <p className="font-semibold italic text-xl text-pink-400 mb-2">
                     Failure Summary:
                    </p>
                {/* Failure Summary */}
                {v.nodes?.[0]?.failureSummary && (
                  <p className="text-lg text-red-300 mt-3 italic">
                    {v.nodes[0].failureSummary}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Download Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => onDownload(analysisId)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition"
        >
          Download Report (CSV)
        </button>
      </div>
    </div>
  );
};

export default AnalysisResults;
