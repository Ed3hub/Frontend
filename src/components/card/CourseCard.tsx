'use client';

import React from "react";
import { FaUserFriends } from "react-icons/fa";
import Image, { StaticImageData } from 'next/image';


interface CourseCardProps {
  title: string;
  description: string;
  members: string;
  creator: string;
  creatorImage: StaticImageData | string;
  isJoined: boolean;
}

export default function CourseCard({
  title,
  description,
  members,
  creator,
  creatorImage,
  isJoined,
}: CourseCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 w-full flex flex-col justify-between h-60 course-cardss">
      {/* Top: Title & Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-black-800 mt-1 line-clamp-2">{description}</p>
      </div>

      {/* Middle: Members */}
      

      <div className="flex items-center space-x-2 mt-2 creator-about">
          <Image
            src={creatorImage}
            alt={creator}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-black-800">{creator}</span>
        </div>


      {/* Bottom: Creator & Button */}
      <div className="flex justify-between items-center mt-auto pt-3">
        <div className="flex items-center text-sm text-black-600 gap-2 mt-3 bg-gray-200 px-4 py-3 rounded-full course-cards-btn">
          <FaUserFriends />
          <span>{members} members</span>
        </div>

        <button
          className={`text-sm font-medium px-4 py-3 course-cards-btn2 md:rounded-full mt-2 transition ${
            isJoined
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={isJoined}
        >
          {isJoined ? "View Group" : "Join Group"}
        </button>
      </div>
    </div>
  );
}