'use client';

import Image, { StaticImageData } from 'next/image';
import { FaUser } from 'react-icons/fa';

interface QnACardProps {
  thumbnail: StaticImageData | string;
  title: string;
  host: string;
  date: string;
  time: string;
  isLive: boolean;
  avatars: { image: StaticImageData; alt?: string }[];
}

export default function QnACard({
  thumbnail,
  title,
  host,
  date,
  time,
  isLive,
  avatars,
}: QnACardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full md:w-72">
      <div className="relative">
        <Image
          src={thumbnail}
          alt="event thumbnail"
          width={300}
          height={180}
          className="w-full h-40 object-cover"
        />

        {/* Avatars */}
        <div className="absolute bottom-2 left-2 flex -space-x-2">
          {avatars.map((avatar, idx) => (
            <Image
              key={idx}
              src={avatar.image}
              alt={ avatar.alt ?? `avatar-${idx}`}
              width={24}
              height={24}
              className="rounded-full border-2 border-white"
            />
          ))}
        </div>

        {/* Live Badge */}
        {isLive && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            ● Live
          </span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-500">
          {date}, {time}
        </p>

        <h3 className="text-sm font-semibold">{title}</h3>

        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <FaUser className="text-xs" />
          <span>{host}</span>
        </div>

        <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-1.5 rounded-md">
          Join Live
        </button>
      </div>
    </div>
  );
}