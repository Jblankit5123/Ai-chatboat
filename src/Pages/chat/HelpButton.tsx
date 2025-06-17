import { useState } from 'react';

import {
  Handshake,
  Clock,
  Laugh,
  CloudSun,
  HelpCircle
} from "lucide-react";

const helpCategories = [
  {
    icon: <Handshake className="w-5 h-5 text-blue-500" />,
    title: "Greetings",
    examples: ["hello", "hi", "hey", "how are you"]
  },
  {
    icon: <Clock className="w-5 h-5 text-purple-500" />,
    title: "Time/Date",
    examples: ["time", "date", "what's the time"]
  },
  {
    icon: <Laugh className="w-5 h-5 text-yellow-500" />,
    title: "Entertainment",
    examples: ["joke", "funny", "poem"]
  },
  {
    icon: <CloudSun className="w-5 h-5 text-teal-500" />,
    title: "Weather",
    examples: ["weather", "what's the weather like"]
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-red-500" />,
    title: "Help",
    examples: ["help", "what can you do"]
  }
];



export const HelpButton = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-10">
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="bg-blue-600 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:scale-110"
        aria-label="Help"
      >
        ?
      </button>

      {showHelp && (
        <div className="absolute bottom-12 right-0 w-72 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <h3 className="font-bold mb-3 text-lg text-gray-800 dark:text-white">
            Ask Me:
          </h3>
          <div className="space-y-3">
           {helpCategories.map((cat, idx) => (
  <div key={idx} className="flex items-start gap-3 p-2 border-b">
    {cat.icon}
    <div>
      <h3 className="font-semibold">{cat.title}</h3>
      <p className="text-sm text-gray-600">
        Examples: {cat.examples.join(", ")}
      </p>
    </div>
  </div>
))}
          </div>
        </div>
      )}
    </div>
  );
};