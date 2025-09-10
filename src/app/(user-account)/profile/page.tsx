'use client';
import { useState } from 'react';
import EditProfileModal from '@/components/editProfile/EditProfileModal';
import AuthoredCourseCard from '@/components/card/AuthoredCoursesCard';

import Image from 'next/image';
import avatarImage from '@/assets/3d-avatar.jpg';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';

import courseImage from '@/assets/live-qna-1.jpg';

export default function CreatorProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    avatar: avatarImage.src,
    name: 'Oluwaseyi Akeredolu',
    email: 'temitayorakeredolu20@gmail.com',
    bio: 'A kingdom-oriented person with interest in design. A cool guy to the core.',
    twitter: 'https://x.com/ImTemitayor',
    instagram: 'https://www.instagram.com/the_designer_keyz/',
  });

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarUpdate = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, avatar: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-1xl mx-auto w-full lg:px-8 overflow-x-auto bg-gray-50 text-black">
      <div className="p-4">
        {/* Title and Edit Button */}
        <div className="flex flex-row justify-between items-center gap-6">
          <h2 className="text-xl font-semibold text-black">Creator Profile</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 flex items-center gap-2 text-gray-600"
          >
            <FiEdit /> Edit
          </button>
        </div>

        {/* Avatar + Info: Stacked vertically on mobile */}
        <div className="flex flex-col gap-6 mt-6">
          {/* Avatar */}
          <div className="flex md:justify-start justify-center">
            <Image
              src={formData.avatar}
              alt="Avatar"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="space-y-4">
            {/* Name & Email */}
            <div className="flex flex-col sm:flex-row sm:items-start md:gap-12 gap-5">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-md">{formData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-md">{formData.email}</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm text-gray-500">Bio</p>
              <p className="text-md">{formData.bio}</p>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-lg text-black mb-4">Social Links</p>
              <div className="space-y-2 mt-1">
                <p className="text-sm text-gray-500">Twitter</p>
                <div>
                  <a
                    href={formData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black break-all"
                  >
                    <FaXTwitter /> {formData.twitter}
                  </a>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-gray-500">Instagram</p>
                  <a
                    href={formData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black break-all"
                  >
                    <FaInstagram /> {formData.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authored Courses */}
      <div className="mt-10 px-4">
        <h3 className="font-semibold mb-4 text-lg">Authored Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AuthoredCourseCard 
            title="Ethereum Development"
            courseImage={courseImage}
            students ="393"
            rating="4.8"
            duration="45 mins"
          />

          <AuthoredCourseCard 
            title="Ethereum Development"
            courseImage={courseImage}
            students ="393"
            rating="4.8"
            duration="45 mins"
          />

          <AuthoredCourseCard 
            title="Ethereum Development"
            courseImage={courseImage}
            students ="393"
            rating="4.8"
            duration="45 mins"
          />

          <AuthoredCourseCard 
            title="Ethereum Development"
            courseImage={courseImage}
            students ="393"
            rating="4.8"
            duration="45 mins"
          />

          <AuthoredCourseCard 
            title="Ethereum Development"
            courseImage={courseImage}
            students ="393"
            rating="4.8"
            duration="45 mins"
          />

          <AuthoredCourseCard 
            title="Ethereum Development"
            courseImage={courseImage}
            students ="393"
            rating="4.8"
            duration="45 mins"
          />

        </div>
      </div>

      {/* Edit Modal */}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        onChange={handleFieldChange}
        onAvatarChange={handleAvatarUpdate}
        onSave={handleSave}
      />
    </div>
  );
}