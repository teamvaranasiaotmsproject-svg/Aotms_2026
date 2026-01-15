import React, { useState, useEffect, useRef } from 'react';
import { sanitizeInput } from '@/utils/validation';
import './Chatbot.css';
import { MoreHorizontal, Send, MessageSquare, Smile, Copy, ThumbsUp, ThumbsDown, RefreshCw, MessageSquarePlus, MessageSquareX, History, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

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
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowMenu(false);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: `Sure! The Academy of Tech Masters offers premium training in Java, Python, and Full Stack Development. Would you like to know about a specific course?`,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
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
    <div className={`chatbot-container ${isOpen ? 'z-[9999]' : 'z-[9998]'}`}>

      {/* Chat Panel */}
      <div ref={chatPanelRef} className={`chat-panel ${isOpen ? 'open' : ''}`}>

        {/* Header - White with Black Text */}
        <div className="chat-header relative">
          <h2 className="text-white font-semibold text-base">Academy Of Tech Masters</h2>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white hover:bg-white/10 rounded-full p-2 transition-colors relative"
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
                    <button className="hover:text-gray-600 transition-colors" title="Copy">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-gray-600 transition-colors" title="Like">
                      <ThumbsUp className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-gray-600 transition-colors" title="Dislike">
                      <ThumbsDown className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-gray-600 transition-colors" title="Regenerate">
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
              >
                <Smile className="w-5 h-5" />
              </button>
              <button type="submit" disabled={!inputValue.trim()} className="text-gray-400 hover:text-primary disabled:opacity-50 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button ref={toggleBtnRef} onClick={toggleChat} className="chat-toggle-btn shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold text-sm">AOTMS</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default Chatbot;