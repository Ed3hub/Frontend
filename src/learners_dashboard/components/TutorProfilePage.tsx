import React from 'react';
import { MessageSquare, MapPin, Mail } from 'lucide-react';

interface TutorProfilePageProps {
  tutor: any;
  setActivePage: (page: string) => void;
}

const TutorProfilePage: React.FC<TutorProfilePageProps> = ({ tutor, setActivePage }) => {
  if (!tutor) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 md:py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-8 md:mb-12">
        <img 
          src={tutor.img} 
          alt={tutor.name} 
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-50 shadow-sm flex-shrink-0" 
        />
        <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-50 relative w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">{tutor.name}</h2>
              <p className="text-blue-600 font-medium mb-3">DeFi, NFTs</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Nova Etherea, Chain Isles</span>
              </div>
            </div>
            <div className="md:text-right text-gray-400 text-sm w-full md:w-auto border-t md:border-0 pt-4 md:pt-0">
              <div className="flex items-center justify-between md:justify-end gap-2 mb-1">
                <span className="truncate">{tutor.name.toLowerCase().replace(/\s+/g, '')}@gmail.com</span>
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium text-gray-800 block md:mt-2">7+ years experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 text-gray-600 leading-relaxed mb-10 md:mb-12 text-sm md:text-base bg-white p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none border md:border-0 border-gray-50">
        <p>
          {tutor.name} is a blockchain strategist and educator with a PhD in Decentralized Systems from the University of Metanetica. 
          He is passionate about making Web3 education accessible to emerging markets and has worked on projects involving DeFi, 
          token engineering, and digital identity frameworks. His sessions blend technical insights with real-world use cases, 
          especially in African tech ecosystems.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button 
          onClick={() => setActivePage('chat')}
          className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
        >
          <MessageSquare className="w-5 h-5" /> Chat with {tutor.name.split(' ')[0]}
        </button>
        <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition-colors w-full sm:w-auto">
          Other courses by {tutor.name.split(' ')[0]}
        </button>
      </div>
    </div>
  );
};

export default TutorProfilePage;
