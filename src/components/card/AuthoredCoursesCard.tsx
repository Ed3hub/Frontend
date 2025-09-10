'use client';

import React from "react";
import Image, { StaticImageData } from 'next/image';


interface AuthoredCourseCardProps {
  title: string;
  courseImage: StaticImageData | string;
  students: string;
  rating: string;
  duration: string;
  
}

export default function AuthoredCourseCard({
  title,
  courseImage,
  students,
  rating,
  duration,
}: AuthoredCourseCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <Image
        src={courseImage}
        alt={title}
        width={400}
        height={120}
        className="w-full h-40 object-cover" 
        />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h4 className="font-medium font-semibold text-sm text-gray-800">{title}</h4>
          <div className="text-xs text-gray-500"> ⭐️ {rating}</div>
        </div>
        <div className="text-xs text-gray-500 mt-1 flex items-center justify-between">
          <div>
            👥 {students} students
          </div>
           <div>
            🕒 {duration}
           </div>
        </div>
      </div>
    </div>
  );
}