import React, { useState } from 'react';
import { Search, Video, Phone, Send, ChevronLeft } from 'lucide-react';

interface ChatPageProps {
  tutor: any;
}

const ALL_TUTORS = [
  { id: 1, name: 'Sandra Jones',   bio: 'Expert in Smart Contracts',       img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop', lastMsg: 'Let me know if you need help!', time: '10:24 AM', unread: 2 },
  { id: 2, name: 'Scott Daniel',   bio: 'Web3 Architect',                  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', lastMsg: 'See you in the next session.',     time: '9:10 AM',  unread: 0 },
  { id: 3, name: 'Tori Simone',    bio: 'DeFi Strategist',                 img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', lastMsg: 'Great progress today!',           time: 'Yesterday', unread: 0 },
  { id: 4, name: 'Barock Jethro',  bio: 'Frontend Web3 Dev',               img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', lastMsg: 'Check the repo link I sent.',      time: 'Mon',       unread: 1 },
  { id: 5, name: 'Raphael Coasta', bio: 'Security Researcher',             img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', lastMsg: 'Audit report attached.',           time: 'Sun',       unread: 0 },
  { id: 6, name: 'Tom Haniel',     bio: 'PhD in Decentralized Systems',    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop', lastMsg: 'Hope that explanation helped!',   time: 'Fri',       unread: 0 },
];

const MESSAGES: Record<number, { from: 'me' | 'tutor'; text: string }[]> = {
  1: [
    { from: 'me',    text: "Hi Sandra! I'm stuck on the smart contract assignment." },
    { from: 'tutor', text: "No worries! Which part is confusing you?" },
    { from: 'me',    text: "The payable modifier and how ether transfers work." },
    { from: 'tutor', text: "Let me know if you need help!" },
  ],
  6: [
    { from: 'me',    text: "Hi! I'm a bit stuck on the \"Tokenomics 101\" assignment. I'm not sure how to explain the difference between utility and governance tokens." },
    { from: 'tutor', text: "Hey May! Great question and don't worry, this one confuses a lot of people at first." },
    { from: 'tutor', text: "Think of utility tokens as \"access keys.\" They let users interact with a product or service like paying gas fees, unlocking features, or using a platform." },
    { from: 'me',    text: "Alright. What about governance tokens?" },
    { from: 'tutor', text: "Governance tokens, on the other hand, are all about voting power. They let users help decide how a protocol evolves." },
    { from: 'me',    text: "Yes, please! That would help a lot." },
  ],
};

const ChatPage: React.FC<ChatPageProps> = ({ tutor }) => {
  const initialTutor = tutor
    ? ALL_TUTORS.find(t => t.name === tutor.name) ?? { ...tutor, id: 99, lastMsg: '', time: '', unread: 0, bio: '' }
    : null;

  const [activeTutor, setActiveTutor] = useState<any>(initialTutor);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Record<number, { from: 'me' | 'tutor'; text: string }[]>>(MESSAGES);

  const filtered = ALL_TUTORS.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.bio.toLowerCase().includes(search.toLowerCase())
  );

  const messages = activeTutor ? (chatMessages[activeTutor.id] ?? []) : [];

  const sendMessage = () => {
    if (!message.trim() || !activeTutor) return;
    setChatMessages(prev => ({
      ...prev,
      [activeTutor.id]: [...(prev[activeTutor.id] ?? []), { from: 'me', text: message.trim() }],
    }));
    setMessage('');
  };

  return (
    <div className="h-[calc(100vh-65px)] md:h-[calc(100vh-73px)] flex overflow-hidden bg-white">

      {/* ── LEFT PANEL: Tutor list ── */}
      <div className={`flex flex-col w-full md:w-[340px] lg:w-[380px] border-r border-gray-100 flex-shrink-0 ${activeTutor ? 'hidden md:flex' : 'flex'}`}>
        {/* Header */}
        <div className="px-5 pt-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search tutors…"
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Tutor list */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 text-sm mt-10">No tutors found.</p>
          )}
          {filtered.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTutor(t)}
              className={`w-full flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors text-left ${activeTutor?.id === t.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''}`}
            >
              <div className="relative flex-shrink-0">
                <img src={t.img} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
                {/* online dot */}
                <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800 text-sm truncate">{t.name}</span>
                  <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{t.time}</span>
                </div>
                <div className="flex justify-between items-center mt-0.5">
                  <span className="text-xs text-gray-400 truncate">{t.lastMsg}</span>
                  {t.unread > 0 && (
                    <span className="ml-2 w-5 h-5 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0">
                      {t.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL: Chat view ── */}
      {activeTutor ? (
        <div className={`flex-1 flex flex-col ${activeTutor ? 'flex' : 'hidden md:flex'}`}>
          {/* Chat Header */}
          <div className="px-4 md:px-6 py-3 border-b border-gray-100 flex items-center justify-between bg-white/90 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-3">
              {/* Back button (mobile) */}
              <button
                onClick={() => setActiveTutor(null)}
                className="md:hidden p-1 text-gray-400 hover:text-gray-700"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="relative">
                <img src={activeTutor.img} className="w-9 h-9 rounded-full object-cover shadow-sm" alt={activeTutor.name} />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm leading-tight">{activeTutor.name}</p>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <Video className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
              <Phone className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50/30">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                <img src={activeTutor.img} className="w-16 h-16 rounded-full object-cover opacity-60" alt="" />
                <p className="text-gray-400 text-sm">No messages yet. Say hi to <span className="font-medium">{activeTutor.name.split(' ')[0]}</span>!</p>
              </div>
            )}
            {messages.map((msg, i) =>
              msg.from === 'me' ? (
                <div key={i} className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[80%] md:max-w-md text-sm shadow-sm">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex gap-2.5">
                  <img src={activeTutor.img} className="w-7 h-7 rounded-full object-cover mt-1 flex-shrink-0" alt="" />
                  <div className="bg-white text-gray-700 px-4 py-2.5 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[80%] md:max-w-md text-sm">
                    {msg.text}
                  </div>
                </div>
              )
            )}
            {/* Typing indicator */}
            <div className="flex gap-2.5 items-center">
              <img src={activeTutor.img} className="w-7 h-7 rounded-full object-cover flex-shrink-0" alt="" />
              <div className="flex gap-1 items-center bg-gray-200/60 px-3 py-2 rounded-full">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 md:p-5 bg-white border-t border-gray-100">
            <div className="relative max-w-4xl mx-auto">
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder={`Message ${activeTutor.name.split(' ')[0]}…`}
                className="w-full pl-5 pr-14 py-3 bg-gray-50 border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
              />
              <button
                onClick={sendMessage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty state on desktop when no tutor selected */
        <div className="hidden md:flex flex-1 flex-col items-center justify-center gap-4 text-center bg-gray-50/30">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <Send className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Start a conversation</h3>
          <p className="text-gray-400 text-sm max-w-xs">Select a tutor from the list to start chatting or search for a specific tutor.</p>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
