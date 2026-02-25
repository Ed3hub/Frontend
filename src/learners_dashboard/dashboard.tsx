import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LanguagePage from './components/LanguagePage';
import TutorsPage from './components/TutorsPage';
import TutorProfilePage from './components/TutorProfilePage';
import CommunityPage from './components/CommunityPage';
import ChatPage from './components/ChatPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedTutor, setSelectedTutor] = useState(null);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'languages': return <LanguagePage />;
      case 'tutors': return <TutorsPage setSelectedTutor={setSelectedTutor} setActivePage={setActivePage} />;
      case 'tutorProfile': return <TutorProfilePage tutor={selectedTutor} setActivePage={setActivePage} />;
      case 'community': return <CommunityPage />;
      case 'chat': return <ChatPage tutor={selectedTutor} />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="transition-all duration-300">
        {renderPage()}
      </main>
    </div>
  );
}
