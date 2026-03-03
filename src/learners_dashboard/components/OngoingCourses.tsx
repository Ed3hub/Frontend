import React from 'react';
import { Search, User, Eye, CheckCircle2, Circle } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  views: string;
  progress: number | 'Finished';
  image: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Intro to Web3 & Blockchain Basics",
    instructor: "Sandra Jones",
    views: "12k",
    progress: 'Finished',
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Tokenomics: Designing Crypto Assets",
    instructor: "Tori Simone",
    views: "19.5k",
    progress: 40,
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Smart Contract Development",
    instructor: "Scott Daniel",
    views: "18.9k",
    progress: 'Finished',
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Decentralized Identity & DAOs",
    instructor: "Tom Haniel",
    views: "18.3k",
    progress: 20,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Cross-chain Interactions",
    instructor: "Barack Jethro",
    views: "10.2k",
    progress: 58,
    image: "https://images.unsplash.com/photo-1644018335954-ab54c83e007f?q=80&w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Tokenomics: Designing Crypto Assets",
    instructor: "Tori Simone",
    views: "19.5k",
    progress: 40,
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=400&h=300&fit=crop",
  }
];

export default function OngoingCourses({ setActivePage, setSelectedCourse }: { 
  setActivePage: (page: string) => void;
  setSelectedCourse: (course: { title: string; instructor: string; img: string }) => void;
}) {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Ongoing courses</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </header>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <div
            key={course.id}
            onClick={() => {
              setSelectedCourse({ title: course.title, instructor: course.instructor, img: course.image });
              setActivePage('courseDetails');
            }}
            className="group cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Metadata */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg leading-tight text-gray-900">
                {course.title}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <User className="w-4 h-4" />
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center gap-2">
                  {course.progress === 'Finished' ? (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                      <CheckCircle2 className="w-4 h-4 fill-emerald-100" />
                      Finished
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                      <Circle className="w-4 h-4 text-gray-300" />
                      {course.progress}%
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Eye className="w-4 h-4" />
                <span>{course.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}