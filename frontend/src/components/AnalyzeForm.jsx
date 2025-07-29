import React, { useState } from "react";
import { Loader2, Trash, Search } from "lucide-react";

const AnalyzeForm = ({ onAnalyze }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!url.trim()) return;
    setLoading(true);
    await onAnalyze(url);
    setLoading(false);
  };

  const handleClear = () => {
    setUrl("");
    onAnalyze(null); // Clear results
  };

  return (
    <div className=" rounded-xl shadow-md p-6 sm:p-8 w-full max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center opacity-90">
        Enter URL to Analyze <span className="grade1">Accessibility</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="https://example.com"
          className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="c-button"
        >
          <span className="c-main">
            <span className="c-ico">
              <span className="c-blur"></span>{" "}
              <span className="ico-text">
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </span>
            </span>
            Analyze
          </span>
        </button>
        <button
          onClick={handleClear}
          disabled={loading}
          className="c1-button"
        >
          <span className="c1-main">
            <span className="c1-ico">
              <span className="c1-blur"></span>{" "}
              <span className="ico1-text">
                <Trash className="w-5 h-5" />
              </span>
            </span>
            Clear
          </span>
        </button>

        {/* <button
          onClick={handleClear}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition"
        >
          <Trash className="w-5 h-5" />
          Clear
        </button> */}
      </div>
    </div>
  );
};

export default AnalyzeForm;
