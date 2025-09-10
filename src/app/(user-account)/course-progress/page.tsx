'use client';

import CourseProgressCard from '@/components/card/CourseProgressCard';



import courseImage from '@/assets/live-qna-3.jpg';

export default function CourseProgressPage() {
  return (
    <div className="max-w-1xl mx-auto w-full lg:px-8 overflow-x-auto mt-2">
      <h1 className="text-xl mb-6 font-bold text-black">Course Progress</h1>
      <h3 className="text-xl mb-4 font-sm text-black">My courses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CourseProgressCard
          title="Ethereum Development"
          courseImage={courseImage}
          students ="393"
          rating="4.8"
          duration="45 mins"
        />

        <CourseProgressCard 
          title="Ethereum Development"
          courseImage={courseImage}
          students ="393"
          rating="4.8"
          duration="45 mins"
        />

        <CourseProgressCard
          title="Ethereum Development"
          courseImage={courseImage}
          students ="393"
          rating="4.8"
          duration="45 mins"
        />

        <CourseProgressCard
          title="Ethereum Development"
          courseImage={courseImage}
          students ="393"
          rating="4.8"
          duration="45 mins"
        />

        <CourseProgressCard
          title="Ethereum Development"
          courseImage={courseImage}
          students ="393"
          rating="4.8"
          duration="45 mins"
        />

        <CourseProgressCard
          title="Ethereum Development"
          courseImage={courseImage}
          students ="393"
          rating="4.8"
          duration="45 mins"
        />

      </div>
    </div>
  );
}