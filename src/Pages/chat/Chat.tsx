import { useState } from "react";
import { useChatHistory } from "../../hooks/useChatHistory";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { useChatBot } from "../../hooks/useChatBot";
import { PromptTemplates } from "./PromptTemplates";
import { useVoiceInput } from "../../hooks/useVoiceInput";
import { HelpButton } from "./HelpButton";
import { Mic, Square, MessageCircle } from "lucide-react";

const useAuth = () => ({ logout: () => alert("Logged out") });

const Chat = () => {
  const { logout } = useAuth();
  const { messages, isTyping, send } = useChatBot();
  const { add, up, down } = useChatHistory();
  const [input, setInput] = useState("");
  const scrollRef = useAutoScroll([messages]);
const { startListening, isListening } = useVoiceInput((voiceText) => {
  setInput(voiceText);
  setTimeout(sendMessage, 500);
});

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    } else if (e.key === "ArrowUp") {
      setInput(up());
    } else if (e.key === "ArrowDown") {
      setInput(down());
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    send(input);
    add(input);
    setInput("");
  };

  const exportChat = () => {
    const blob = new Blob([JSON.stringify(messages, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat_history.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <div className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          ChatBot
        </h1>
        <div className="flex gap-2">
          <button
            onClick={exportChat}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
          >
            Export Chat
          </button>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Prompt Templates */}
      <PromptTemplates onSelect={(text) => setInput(text)} />

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl shadow ${msg.sender === "user"
                ? "bg-blue-600 text-white rounded-br-none"
                : msg.loading
                  ? "bg-yellow-300 text-black italic rounded-bl-none animate-pulse"
                  : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-bl-none"
                }`}
            >
              {msg.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Help Button */}
      <HelpButton />

      {/* Input Area */}
      <div className="bg-white dark:bg-gray-800 p-4 border-t flex gap-2 items-center">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... or use mic 🎤"
          className="flex-1 p-2 border rounded resize-none h-16 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          disabled={isTyping}
        />
        <button
          onClick={startListening}
          disabled={isListening}
          className={`p-3 rounded-full border ${isListening
            ? "bg-red-500 text-white animate-pulse"
            : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
          title="Speak"
        >
          {isListening ? (
            <Square className="w-5 h-5 text-red-500" />
          ) : (
            <Mic className="w-5 h-5 text-blue-500" />
          )}
        </button>
        <button
          onClick={sendMessage}
          disabled={isTyping || !input.trim()}
          className={`px-4 py-2 rounded shadow text-white ${isTyping || !input.trim()
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;