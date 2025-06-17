import { useState } from "react";

export const useChatHistory = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const add = (message: string) => {
    setHistory(prev => [...prev, message]);
    setHistoryIndex(-1);
  };

  const up = () => {
    if (history.length === 0) return "";
    const newIndex = historyIndex >= history.length - 1 ? history.length - 1 : historyIndex + 1;
    setHistoryIndex(newIndex);
    return history[history.length - 1 - newIndex];
  };

  const down = () => {
    if (history.length === 0) return "";
    const newIndex = historyIndex <= 0 ? -1 : historyIndex - 1;
    setHistoryIndex(newIndex);
    return newIndex === -1 ? "" : history[history.length - 1 - newIndex];
  };

  return { add, up, down };
};
