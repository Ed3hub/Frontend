// components/UserCard.tsx

import Image, { StaticImageData } from 'next/image';

type UserCardProps = {
  name: string;
  role: string;
  imageUrl: StaticImageData | string;
};

export default function UserCard ({ name, role, imageUrl }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
        <Image src={imageUrl} alt={name} fill objectFit="cover" />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-4 rounded transition">
        Connect
      </button>
    </div>
  );
};

