import React from 'react';
import { ChevronLeft, Video, Phone, Send } from 'lucide-react';

interface ChatPageProps {
  tutor: any;
}

const ChatPage: React.FC<ChatPageProps> = ({ tutor }) => {
  const currentTutor = tutor || { name: 'Tom Haniel', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop' };

  return (
    <div className="h-[calc(100vh-65px)] md:h-[calc(100vh-73px)] flex flex-col bg-white">
      {/* Chat Header */}
      <div className="px-4 md:px-8 py-3 md:py-4 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 md:gap-4">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-400 cursor-pointer" />
          <div className="relative">
            <img src={currentTutor.img} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm" alt="Tutor" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <span className="font-bold text-base md:text-lg text-gray-800">{currentTutor.name}</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6 text-gray-400">
          <Video className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
          <Phone className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 bg-gray-50/30">
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white p-3 md:p-4 rounded-2xl rounded-tr-none max-w-[85%] md:max-w-md text-sm md:text-base shadow-sm">
            Hi! I'm a bit stuck on the "Tokenomics 101" assignment. I'm not sure how to explain the difference between utility and governance tokens.
          </div>
        </div>

        <div className="flex gap-3 md:gap-4">
          <img src={currentTutor.img} className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover mt-1 flex-shrink-0" alt="Tutor" />
          <div className="space-y-2 max-w-[85%] md:max-w-md">
            <div className="bg-white text-gray-700 p-3 md:p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm md:text-base">
              Hey May! Great question and don't worry, this one confuses a lot of people at first.
            </div>
            <div className="bg-white text-gray-700 p-3 md:p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm md:text-base">
              Think of utility tokens as "access keys." They let users interact with a product or service like paying gas fees, unlocking features, or using a platform.
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-blue-600 text-white p-3 md:p-4 rounded-2xl rounded-tr-none max-w-[85%] md:max-w-md text-sm md:text-base shadow-sm">
            Alright. What about governance tokens?
          </div>
        </div>

        <div className="flex gap-3 md:gap-4">
          <img src={currentTutor.img} className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover mt-1 flex-shrink-0" alt="Tutor" />
          <div className="bg-white text-gray-700 p-3 md:p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[85%] md:max-w-md text-sm md:text-base">
            Governance tokens, on the other hand, are all about voting power. They let users help decide how a protocol evolves.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-blue-600 text-white p-3 md:p-4 rounded-2xl rounded-tr-none max-w-[85%] md:max-w-md text-sm md:text-base shadow-sm">
            Yes, please! That would help a lot.
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex gap-3 md:gap-4 items-center">
          <img src={currentTutor.img} className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover mt-1 flex-shrink-0" alt="Tutor" />
          <div className="flex gap-1 items-center bg-gray-200/50 p-2 px-3 rounded-full">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-8 bg-white border-t border-gray-50">
        <div className="relative max-w-4xl mx-auto">
          <input 
            type="text" 
            placeholder="Type your message" 
            className="w-full pl-5 pr-14 py-3 md:py-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/10 text-sm md:text-base"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md">
            <Send className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
