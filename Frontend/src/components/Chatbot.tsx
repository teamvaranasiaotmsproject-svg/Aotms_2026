import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { sanitizeInput } from '@/utils/validation';
import './Chatbot.css';
import { MoreHorizontal, Send, MessageSquare, Smile, Copy, ThumbsUp, ThumbsDown, RefreshCw, MessageSquarePlus, MessageSquareX, History, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { FaRobot } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const chatPanelRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const commonEmojis = ['😊', '😂', '😍', '👋', '👍', '🙏', '🔥', '✨', '💻', '🚀', '💯', '✅'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isTyping, isOpen]);

  // Close menu, chatbot and emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close header menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }

      // Close emoji picker
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }

      // Close chatbot window
      if (
        isOpen &&
        chatPanelRef.current &&
        !chatPanelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
      ]);
    }
  }, [isOpen, messages.length]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowMenu(false);
  };


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };

    // Optimistically update UI
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Prepare context for the API
      // Note: We use the functional update 'prev' state or reconstruct the array to include the new message
      const currentMessages = [...messages, userMessage];
      const apiMessages = currentMessages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, {
        messages: apiMessages
      });

      const botContent = response.data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";

      const botResponse: Message = {
        id: Date.now() + 1,
        text: botContent,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botResponse]);

    } catch (error) {
      console.error("Chat Error:", error);
      toast.error("Failed to connect to the assistant.");
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting to the server right now. Please try again later.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleStartNewChat = () => {
    setMessages([{ id: Date.now(), text: 'Hello! How can I help you today?', sender: 'bot' }]);
    setShowMenu(false);
    toast.success("New chat started");
  };

  const handleEndChat = () => {
    setIsOpen(false);
    setShowMenu(false);
  };

  const handleViewRecentChats = () => {
    toast.info("No recent chats history available yet.");
    setShowMenu(false);
  };

  const onEmojiSelect = (emoji: string) => {
    setInputValue(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'z-[20000]' : 'z-[19999]'}`}>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatPanelRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="chat-panel open"
          >
            {/* Header - White with Black Text */}
            <div className="chat-header relative">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full bot-icon-animated">
                  <FaRobot className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-white font-semibold text-sm">AOTMS Assistant Bot</h2>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-white hover:bg-white/10 rounded-full p-2 transition-colors relative"
                  aria-label="More options"
                  title="More options"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-white/10 rounded-full p-2 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Header Dropdown Menu */}
              {showMenu && (
                <div ref={menuRef} className="absolute top-12 right-4 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 z-50 animate-fade-in-up">
                  <button onClick={handleStartNewChat} className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors">
                    <MessageSquarePlus className="w-5 h-5 text-gray-500" />
                    <span className="font-medium text-sm">Start a new chat</span>
                  </button>
                  <button onClick={handleEndChat} className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors">
                    <MessageSquareX className="w-5 h-5 text-gray-500" />
                    <span className="font-medium text-sm">End chat</span>
                  </button>
                  <button onClick={handleViewRecentChats} className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors">
                    <History className="w-5 h-5 text-gray-500" />
                    <span className="font-medium text-sm">View recent chats</span>
                  </button>
                </div>
              )}
            </div>

            {/* Messages Area */}
            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message-row ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex flex-col gap-1 max-w-[85%]">
                    <div className={`message-bubble ${msg.sender}`}>
                      {msg.text}
                    </div>
                    {msg.sender === 'bot' && (
                      <div className="flex items-center gap-3 mt-1 ml-1 text-gray-400">
                        <button className="hover:text-gray-600 transition-colors" title="Copy" aria-label="Copy message">
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button className="hover:text-gray-600 transition-colors" title="Like" aria-label="Like response">
                          <ThumbsUp className="w-3.5 h-3.5" />
                        </button>
                        <button className="hover:text-gray-600 transition-colors" title="Dislike" aria-label="Dislike response">
                          <ThumbsDown className="w-3.5 h-3.5" />
                        </button>
                        <button className="hover:text-gray-600 transition-colors" title="Regenerate" aria-label="Regenerate response">
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message-row justify-start">
                  <div className="message-bubble bot typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Floating Style */}
            <div className="chat-input-area border-t pt-2">
              {showEmojiPicker && (
                <div ref={emojiPickerRef} className="absolute bottom-16 left-4 bg-white border rounded-lg shadow-lg p-2 flex flex-wrap gap-2 z-50 animate-fade-in-up w-56">
                  {commonEmojis.map((emoji, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => onEmojiSelect(emoji)}
                      className="text-xl hover:bg-gray-100 p-1 rounded transition-colors"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
              <form className="chat-input-form shadow-lg border border-gray-100" onSubmit={handleSendMessage}>
                <Input
                  className="border-none focus-visible:ring-0 shadow-none bg-transparent"
                  value={inputValue}
                  onChange={(e) => setInputValue(sanitizeInput.text(e.target.value))}
                  placeholder="Message..."
                />
                <div className="flex items-center gap-2 pr-2">
                  <button
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className={`transition-colors ${showEmojiPicker ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                    aria-label="Add emoji"
                    title="Add emoji"
                  >
                    <Smile className="w-5 h-5" />
                  </button>
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="text-gray-400 hover:text-primary disabled:opacity-50 transition-colors"
                    aria-label="Send message"
                    title="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Edge Toggle Button */}
      {!isOpen && (
        <button
          ref={toggleBtnRef}
          onClick={toggleChat}
          className="fixed bottom-0 right-0 rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:px-7 z-[19999] group overflow-hidden"
          style={{
            padding: '10px 20px',
            background: '#0066CC',
            color: 'white',
            border: '2px solid white',
            borderRight: 'none',
            borderBottom: 'none',
            boxShadow: '-4px -4px 14px rgba(11, 78, 150, 0.3)'
          }}
          aria-label="Open support chat"
          title="Open support chat"
        >
          <div className="flex items-center gap-2 relative z-10">
            <div className="w-8 h-8 flex items-center justify-center bot-icon-animated">
              <FaRobot className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-sm tracking-wide">AOTMS</span>
          </div>
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      )}
    </div>
  );
};

export default Chatbot;