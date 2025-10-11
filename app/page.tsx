'use client';

import { useState, useRef, useEffect } from 'react';
import { CONFIG } from '@/config';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AI_NAME = CONFIG.AI_NAME;
const AI_DESCRIPTION = CONFIG.AI_DESCRIPTION;
const TAGLINE = CONFIG.TAGLINE;
const LOGO_URL = CONFIG.LOGO_URL;

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Check if API key is configured
      const apiKey = CONFIG.ARIES_API_KEY;
      if (!apiKey || apiKey === 'YOUR_ARIES_API_KEY_HERE') {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `⚠️ API key not configured!\n\nPlease edit config.ts and add your Aries API key.\n\nGet one free at: https://api.aries.website/signup`
        }]);
        setLoading(false);
        return;
      }

      const systemMessage = {
        role: 'system' as const,
        content: `You are ${AI_NAME}, ${AI_DESCRIPTION}. You are helpful, intelligent, and friendly. Always be engaging and provide valuable responses.`
      };

      const response = await fetch('https://api.aries.website/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'Aries 1.3 code',
          messages: [systemMessage, ...messages, userMessage],
        }),
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {LOGO_URL ? (
            <img src={LOGO_URL} alt={AI_NAME} className="w-8 h-8 rounded-lg object-cover" />
          ) : null}
          <div>
            <h1 className="text-xl font-bold">{AI_NAME}</h1>
            <p className="text-xs text-gray-500 mt-0.5">{TAGLINE}</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              <h2 className="text-2xl font-bold mb-2">Start a conversation with {AI_NAME}</h2>
              <p className="text-sm">{AI_DESCRIPTION}</p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-white text-black'
                    : 'bg-[#1a1a1a] text-[#e5e5e5]'
                }`}
              >
                <p className="whitespace-pre-wrap break-words">{msg.content}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a1a] rounded-2xl px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[#1a1a1a] bg-[#0a0a0a] p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center bg-[#1a1a1a] rounded-full px-4 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder={`Message ${AI_NAME}...`}
              disabled={loading}
              className="flex-1 bg-transparent outline-none text-[#e5e5e5] placeholder-gray-500"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="ml-2 px-4 py-2 bg-white text-black rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
