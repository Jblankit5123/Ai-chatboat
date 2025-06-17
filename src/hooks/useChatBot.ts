import { useState, useEffect } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
  loading?: boolean;
};

const dummyResponses: Record<string, string> = {
  "hello": "Hello! How can I assist you today?",
  "hi": "Hi there! I'm doing great, how about you?",
  "namaste": "Hello! Welcome to the chatbot.",
  "how are you": "I'm just a bot, but I'm here and ready to help! 😊",
  "time": `The current time is ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}.`,
  "date": `Today's date is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`,
  "joke": "Why do programmers prefer dark mode? Because the light attracts bugs! 😂",
  "funny": "Why was the JavaScript developer sad? Because they didn't 'null' their feelings. 😄",
  "poem": "Roses are red, code is blue,\nI'm a chatbot, here to help you!",
  "weather": "I'm not connected to a weather API, but I hope it's sunny where you are! ☀️",
  "forecast": "I can’t provide live forecasts, but I hope you’re having a great day!",
  "help": "You can ask me things like:\n\n" +
         "• Greetings: hello, hi, how are you\n" +
         "• Time/Date: time, date\n" +
         "• Jokes/Poems: joke, funny, poem\n" +
         "• Weather: weather, forecast\n" +
         "• Help: help, what can you do",
  "default": "Sorry, I didn’t understand that. Try typing 'help' to see what I can do."
};


export const useChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Show welcome message on first load
 useEffect(() => {
  if (messages.length === 0) {
    setMessages([{ 
      sender: "bot", 
      text: "Hi! I'm your chatbot assistant. Type 'help' to see what I can do." 
    }]);
  }
}, []);

  const send = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: "user", text }]);
    
    // Add loading indicator
    setMessages(prev => [...prev, { sender: "bot", text: "", loading: true }]);
    setIsTyping(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => !msg.loading));
      
      const lowerText = text.toLowerCase();
      let response = dummyResponses.default;
      
      // Find matching response
      Object.keys(dummyResponses).forEach(key => {
        if (lowerText.includes(key)) {
          response = dummyResponses[key];
        }
      });
      
      // Add bot response
      setMessages(prev => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 800);
  };

  return { messages, isTyping, send };
};