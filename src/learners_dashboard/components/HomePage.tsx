import React from 'react';
import { Users, CheckCircle2, Clock } from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: string) => void;
  setSelectedCourse: (course: { title: string; instructor: string; img: string; showPurchaseModal?: boolean }) => void;
}

const HomePage = ({ setActivePage, setSelectedCourse }: HomePageProps) => {
  const ongoingCourses = [
    { title: "Intro to Web3 & Blockchain Basics", tutor: "Sandra Jones", progress: "Finished", lessons: 12, img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Tokenomics: Designing Crypto Assets", tutor: "Tori Simone", progress: "40%", lessons: 8, img: "https://plus.unsplash.com/premium_photo-1661962473906-c2cbc40fb71d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5MXx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Smart Contract Development", tutor: "Scott Daniel", progress: "Finished", lessons: 15, img: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&h=300&fit=crop" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 md:py-10">
      {/* Welcome Section */}
      <div className="mb-6 md:mb-10 text-center sm:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex flex-wrap items-center justify-center sm:justify-start gap-2">
          Welcome, Jonas May 👋
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">Start your journey into blockchain, NFTs, DAOs, and more.</p>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[300px] md:h-80 w-full rounded-2xl md:rounded-3xl overflow-hidden mb-12 flex flex-col md:flex-row items-center bg-blue-400">
        <div className="relative z-10 p-6 sm:p-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">Your Future Starts Here</h2>
          <p className="text-gray-800 text-base md:text-lg mt-4 mb-6 md:mb-8">Find courses tailored to your skill level and goals.</p>
          <button className="bg-white/20 backdrop-blur-sm border border-gray-800 text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-xl font-medium hover:bg-white/40 transition-all">
            Get Started
          </button>
        </div>
        <img 
          src="/laptop_lady.svg" 
          alt="Hero" 
          className="md:absolute right-0 bottom-0 h-48 md:h-[110%] w-full md:w-auto object-cover md:object-contain opacity-80 md:opacity-100"
        />
      </div>

      {/* Ongoing Courses */}
      <section className="mb-12 md:mb-16">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Ongoing courses</h3>
          <button onClick={() => setActivePage('ongoingCourses')} className="text-blue-600 font-medium text-sm md:text-base">See All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ongoingCourses.map((course, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedCourse({ title: course.title, instructor: course.tutor, img: course.img });
                setActivePage('courseDetails');
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all"
            >
              <img src={course.img} alt={course.title} className="w-full h-40 md:h-48 object-cover" />
              <div className="p-4 md:p-5">
                <h4 className="font-bold text-base md:text-lg mb-4 line-clamp-2">{course.title}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                    <Users className="w-4 h-4" /> {course.tutor}
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                    <CheckCircle2 className={`w-4 h-4 ${course.progress === 'Finished' ? 'text-green-500' : 'text-blue-500'}`} /> {course.progress}
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                    <Clock className="w-4 h-4" /> {course.lessons} lessons
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Courses */}
      <section>
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Recommended courses</h3>
          <button onClick={() => setActivePage('recommendedCourses')} className="text-blue-600 font-medium text-sm md:text-base">See All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Web3 Identity & Decentralized Authentication", instructor: "Sandra Jones", views: "1.2k", img: "https://images.unsplash.com/photo-1639322537138-5e513100b36e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Building dApps with Solidity", instructor: "Tori Simone", views: "10.5k", img: "https://images.unsplash.com/photo-1666811722587-b5a1885b21f6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "How Blockchain Works", instructor: "Scott Daniel", views: "13.9k", img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          ].map((rec, i) => (
            <div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all">
              <div className="bg-white rounded-t-2xl">
                <img
                  src={rec.img}
                  alt={rec.title}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className='p-4 md:p-5'>
                <h4 className="text-base md:text-lg font-bold leading-tight mb-2 text-gray-900">{rec.title}</h4>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">👤</span>
                    {rec.instructor}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">👁</span> {rec.views}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedCourse({ title: rec.title, instructor: rec.instructor, img: rec.img, showPurchaseModal: true });
                    setActivePage('courseDetails');
                  }}
                  className="text-blue-500 text-sm font-semibold hover:underline"
                >
                  Enroll Now
                </button>
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
