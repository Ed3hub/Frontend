import React from 'react';
import { Search } from 'lucide-react';

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
          <p className="text-gray-500 max-w-2xl text-sm md:text-base mx-auto md:mx-0">Whether you're stuck on a smart contract or just want to sharpen your skills, our expert tutors are here to help you move forward; one session at a time.</p>
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
              <div className="flex gap-8 border-t pt-4 items-center"
              onClick={e => e.stopPropagation()}>
                <p className='text-sm'>Tutor</p>
                <div className='flex gap-3'>
                {/* WhatsApp */}
                <a href="#">
                <svg className="w-4 h-4 text-gray-400 hover:text-green-500 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                </a>
                {/* Facebook */}
                <a href="#">
                <svg className="w-4 h-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                </a>
                {/* X (Twitter) */}
                <a href="#">
                <svg className="w-4 h-4 text-gray-400 hover:text-black transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                </a>
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;
