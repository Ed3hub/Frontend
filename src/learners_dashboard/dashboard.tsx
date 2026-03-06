import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LanguagePage from './components/LanguagePage';
import TutorsPage from './components/TutorsPage';
import TutorProfilePage from './components/TutorProfilePage';
import CommunityPage from './components/CommunityPage';
import ChatPage from './components/ChatPage';
import OngoingCourses from './components/OngoingCourses';
import CourseDetails from './components/CourseDetails';
import RecommendedCourses from './components/RecommendedCourses';
import CheckoutFlow from './components/Payment';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState<{ title: string; instructor: string; img: string; showPurchaseModal?: boolean } | null>(null);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} setSelectedCourse={setSelectedCourse} />;
      case 'languages': return <LanguagePage />;
      case 'tutors': return <TutorsPage setSelectedTutor={setSelectedTutor} setActivePage={setActivePage} />;
      case 'tutorProfile': return <TutorProfilePage tutor={selectedTutor} setActivePage={setActivePage} />;
      case 'community': return <CommunityPage />;
      case 'chat': return <ChatPage tutor={selectedTutor} />;
      case 'ongoingCourses': return <OngoingCourses setActivePage={setActivePage} setSelectedCourse={setSelectedCourse} />;
      case 'recommendedCourses': return <RecommendedCourses setActivePage={setActivePage} setSelectedCourse={setSelectedCourse} />;
      case 'courseDetails': return <CourseDetails setActivePage={setActivePage} course={selectedCourse} />;
      case 'payment': return <CheckoutFlow setActivePage={setActivePage} setSelectedCourse={setSelectedCourse} course={selectedCourse} />;
      default: return <HomePage setActivePage={setActivePage} setSelectedCourse={setSelectedCourse} />;
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
