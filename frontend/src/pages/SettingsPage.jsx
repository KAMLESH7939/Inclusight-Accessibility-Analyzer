import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Footer from "../components/Footer";
import xyz  from "../components/eye1.png"
const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className=" container mx-auto px-4 mt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <p className=" mt-5 text-3xl font-bold text-center"><span className="grade1">Numerous</span> Themes</p>
          <p className="text-xl text-base-content/70 text-center">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}

        

      </div>
      <div className="relative">
            <img src={xyz} alt="no" />
              <DotLottieReact
                        src="https://lottie.host/41749e88-313e-4b78-bd9b-910a1d8679fb/t1r390IC5a.lottie"
                        loop
                        autoplay
                        className="mb-4 scale-[0.4] absolute top-[14%] left-[-27%]"
                      />
      </div>
     

    </div>
  );
};
export default SettingsPage;
import React from "react";
