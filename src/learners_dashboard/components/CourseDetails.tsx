import React, { useState } from 'react';
import {
  ChevronLeft,
  Star,
  Download,
  CheckCircle2,
  Clock,
  FileText,
  X,
} from 'lucide-react';
import ResourcesPage from './ResourcesPage';
import DurationPage from './DurationPage';
import InfoPage from './InfoPage';
import CourseCompletionModal from './CourseCompletionModal';

interface CourseDetailsProps {
  setActivePage: (page: string) => void;
  course: { title: string; instructor: string; img: string; showPurchaseModal?: boolean } | null;
  setSelectedLesson?: (lesson: { title: string; type: string; duration: string; completed: boolean } | null) => void;
}

const CourseDetails = ({ setActivePage, course, setSelectedLesson }: CourseDetailsProps) => {
  const [modalOpen, setModalOpen] = useState(course?.showPurchaseModal ?? false);
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = ["Home", "Resources", "Skill Level", "Duration", "Info"];

  const modules = [
    { title: "Introduction to Tokenomics", type: "Video", duration: "6 mins", completed: true },
    { title: "Token Distribution Model", type: "Video", duration: "7 mins", completed: true },
    { title: "Monetary Policy in Crypto", type: "Video", duration: "4 mins", completed: false },
    { title: "Game Theory in Tokenomics", type: "Reading", duration: "10 mins", completed: false },
  ];

  const completedModules = modules.filter(m => m.completed).length;
  const completedPercentage = Math.round((completedModules / modules.length) * 100);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 font-sans">
      {/* Header Navigation */}
      <header className="flex items-center gap-4 mb-8">
        <button onClick={() => setActivePage('home')} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">{course?.title ?? 'Course Details'}</h1>
      </header>

      {/* Course Thumbnail */}
      {course?.img && (
        <div className="w-full h-52 rounded-2xl overflow-hidden mb-6">
          <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Reviews and Progress */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold mb-1">Reviews</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-bold text-sm">4.7</span>
              <span className="text-gray-400 text-sm">(2.5k+)</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <CheckCircle2 className={`w-5 h-5 ${completedPercentage >= 100 ? 'text-green-500' : 'text-gray-400'}`} />
            <span className="font-medium text-gray-700">{completedPercentage}% completed</span>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black">
            <Download className="w-4 h-4" />
            Download <span className="text-gray-400 font-normal">300 MB</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg border text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-blue-50 border-blue-400 text-blue-500 shadow-sm"
                : "bg-white border-gray-200 text-gray-500 hover:border-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === 'Home' && (
        <div className="animate-fade-in">
          {/* Description */}
          <div className="mb-10">
            <p className="text-gray-600 leading-relaxed text-sm">
              This course introduces UI/UX designers to the world of Tokenomics and Decentralized Finance (DeFi).
              You'll learn how DeFi protocols work, the economic models behind them, and how to design usable,
              trustworthy, and engaging interfaces for Web3 users.
              The course blends conceptual understanding with practical design applications, helping you...
              <button className="text-blue-500 font-semibold ml-1">see more...</button>
            </p>
          </div>

          {/* Curriculum */}
          <section className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-bold text-lg">Module 1</h3>
            </div>

            <div className="divide-y divide-gray-100">
              {modules.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group py-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors"
                  onClick={() => {
                    if (setSelectedLesson) setSelectedLesson(item);
                    setActivePage('courseLesson');
                  }}
                >
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <div className="flex gap-3">
                      <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${
                        item.completed ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-gray-50 text-gray-500 border-gray-200"
                      }`}>
                        {item.completed && <CheckCircle2 className="w-3 h-3" />}
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-[10px] font-bold">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  {idx > 0 && <Download className="w-5 h-5 text-gray-300 group-hover:text-gray-600 cursor-pointer" />}
                </div>
              ))}

              {/* Assessment Section */}
              <div className="py-8 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-gray-900">Assessment</h3>
                  <Download className="w-5 h-5 text-gray-300" />
                </div>
                <p className="text-sm text-gray-500">Draft a tokenomics model for a fictional dApp</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 text-[10px] font-bold">
                    <FileText className="w-4 h-4" />
                    Graded Assessment
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 text-[10px] font-bold">
                    <Clock className="w-4 h-4" />
                    20mins
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium">Due: May 2</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Course Completion Modal conditionally triggered on 50% */}
      {completedPercentage === 50 && activeTab === 'Home' && (
        <CourseCompletionModal setActivePage={setActivePage} />
      )}

      {activeTab === 'Resources' && (
        <div className="animate-fade-in">
          <ResourcesPage />
        </div>
      )}

      {activeTab === 'Duration' && (
        <div className="animate-fade-in">
          <DurationPage />
        </div>
      )}

      {activeTab === 'Info' && (
        <div className="animate-fade-in">
          <InfoPage />
        </div>
      )}

      {/* One-Time Course Purchase Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setModalOpen(false);
              setActivePage('recommendedCourses');
            }}
          />

          {/* Modal Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 p-8 flex flex-col gap-4 animate-fade-in">
            {/* The subscription and one-time payment instruction */}
            <div className='flex flex-col md:flex-row gap-4'>
           <div className='flex flex-col gap-2 text-center'>
            {/* Heading */}
            <h2 className="text-xl font-extrabold text-gray-900">Subscribe to Ed3Hub</h2>

            {/* Sub-text */}
            <p className="text-gray-500 text-sm leading-relaxed">
            Pay a monthly or yearly subscription fee for unlimited access to all eligible courses on the platform.</p>

            {/* Divider */}
            <hr className="border-gray-100" />

            {/* Actions */}
            <div className="">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setActivePage('subscription');
                }}
                className="flex-1 px-12 bg-[#00A6FB] py-3 rounded-xl  text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
              >
                Subscribe
              </button>
            </div>
           </div>
           <div className='flex flex-col gap-2 text-center'>
            {/* Heading */}
            <h2 className="text-xl font-extrabold text-gray-900">One-Time Course Purchase</h2>

            {/* Sub-text */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Buy this particular course once for a set price with lifetime access to that specific course.
            </p>

            {/* Divider */}
            <hr className="border-gray-100" />

            {/* Actions */}
            <div className="">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setActivePage('payment');
                }}
                className="flex-1 px-12 bg-[#00A6FB] py-3 rounded-xl  text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
              >
                Make Payment
              </button>
            </div>
           </div>
            
          </div>
          {/* Cancel button */}
            <button
                onClick={() => {
                  setModalOpen(false);
                  setActivePage('recommendedCourses');
                }}
                className="flex-1 py-3 px-12 w-48 mx-auto rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;