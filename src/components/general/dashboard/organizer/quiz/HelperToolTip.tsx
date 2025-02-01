import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const HelperTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTooltip = () => {
      setIsVisible(true);
      // Hide after 5 seconds
      setTimeout(() => setIsVisible(false), 5000);
    };

    // Show initially after 1 second
    const initialTimeout = setTimeout(showTooltip, 1000);

    // Show every 20 seconds
    const interval = setInterval(showTooltip, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute w-36 -top-14 right-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 p-[1px] rounded-lg">
        <div className="bg-blue-950 px-3 py-2 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-cyan-400" />
          <p className="text-[0.7rem] text-white text-pretty">
            Click to toggle question navigator
          </p>
        </div>
      </div>
      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-fuchsia-500 absolute -bottom-2 right-0" />
    </div>
  );
};
