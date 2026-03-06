import React from 'react';

// --- Types ---
interface Course {
  id: number;
  title: string;
  instructor: string;
  views: string;
  imageUrl: string;
}

// --- Mock Data ---
const courses: Course[] = [
  { id: 1, title: "Web3 Identity & Decentralized Authentication", instructor: "Sandra Jones", views: "1.2k", imageUrl: "https://images.unsplash.com/photo-1639322537138-5e513100b36e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Building dApps with Solidity", instructor: "Tori Simone", views: "10.5k", imageUrl: "https://images.unsplash.com/photo-1666811722587-b5a1885b21f6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "How Blockchain Works", instructor: "Scott Daniel", views: "13.9k", imageUrl: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "NFTs and Digital Ownership", instructor: "Tom Haniel", views: "18.1k", imageUrl: "https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Cross-chain Interactions", instructor: "Barack Jethro", views: "12.2k", imageUrl: "https://plus.unsplash.com/premium_photo-1663931932651-ea743c9a0144?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "Tokenomics: Designing Crypto Assets", instructor: "Tori Simone", views: "19.5k", imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const categories = ["Beginner", "Intermediate", "Advanced", "All Levels"];

interface RecommendedCoursesProps {
  setActivePage: (page: string) => void;
  setSelectedCourse: (course: { title: string; instructor: string; img: string; showPurchaseModal?: boolean }) => void;
}

// --- Components ---
const CourseCard: React.FC<{
  course: Course;
  onEnroll: () => void;
}> = ({ course, onEnroll }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="overflow-hidden rounded-xl mb-4 bg-gray-100 aspect-square md:aspect-video lg:aspect-square">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="text-lg font-bold leading-tight mb-2 text-gray-900">{course.title}</h3>
    <div className="flex items-center justify-between mt-auto">
      <div className="text-sm text-gray-600">
        <div className="flex items-center gap-1 mb-1">
          <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">👤</span>
          {course.instructor}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs">👁</span> {course.views}
        </div>
      </div>
      <button
        onClick={onEnroll}
        className="text-blue-500 text-sm font-semibold hover:underline"
      >
        Enroll Now
      </button>
    </div>
  </div>
);

export const RecommendedCourses: React.FC<RecommendedCoursesProps> = ({ setActivePage, setSelectedCourse }) => {
  const handleEnroll = (course: Course) => {
    setSelectedCourse({
      title: course.title,
      instructor: course.instructor,
      img: course.imageUrl,
      showPurchaseModal: true,
    });
    setActivePage('courseDetails');
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-12 font-sans">
      <header className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Recommended courses</h2>
        <p className="text-gray-500 mb-8">Courses trending among web3 developers</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-lg border transition-colors text-sm font-medium
                ${cat === 'Beginner'
                  ? 'border-blue-500 text-blue-500 ring-1 ring-blue-500'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={() => handleEnroll(course)}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCourses;