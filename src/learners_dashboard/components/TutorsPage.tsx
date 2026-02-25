import React from 'react';
import { Search, MessageSquare, Video, Phone } from 'lucide-react';

interface TutorsPageProps {
  setSelectedTutor: (tutor: any) => void;
  setActivePage: (page: string) => void;
}

const TutorsPage: React.FC<TutorsPageProps> = ({ setSelectedTutor, setActivePage }) => {
  const tutors = [
    { id: 1, name: 'Sandra Jones', bio: 'Expert in Smart Contracts', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { id: 2, name: 'Scott Daniel', bio: 'Web3 Architect', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { id: 3, name: 'Tori Simone', bio: 'DeFi Strategist', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
    { id: 4, name: 'Barock Jethro', bio: 'Frontend Web3 Dev', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
    { id: 5, name: 'Raphael Coasta', bio: 'Security Researcher', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { id: 6, name: 'Tom Haniel', bio: 'PhD in Decentralized Systems', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Find your Web3 Tutor</h1>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base mx-auto md:mx-0">Whether you're stuck on a smart contract or just want to sharpen your skills, our expert tutors are here to help you move forward.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search for tutors" 
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {tutors.map(tutor => (
          <div 
            key={tutor.id} 
            onClick={() => { setSelectedTutor(tutor); setActivePage('tutorProfile'); }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group hover:shadow-lg transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={tutor.img} alt={tutor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 md:p-5">
              <h4 className="font-bold text-lg text-gray-800">{tutor.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{tutor.bio}</p>
              <div className="flex gap-4 border-t pt-4">
                 <Phone className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors" />
                 <MessageSquare className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors" />
                 <Video className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;
