'use client';

import { useState } from 'react';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';


interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    avatar: string;
    name: string;
    email: string;
    bio: string;
    twitter: string;
    instagram: string;
  };
  onChange: (field: string, value: string) => void;
  onAvatarChange: (file: File) => void;
  onSave: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  formData,
  onChange,
  onAvatarChange,
  onSave,
}: EditProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onAvatarChange(file);
  };

 const handleSave = () => {
  onSave();
  setIsEditing(false);

  toast.custom((t) => (
    <AnimatePresence>
      {t.visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-white max-w-md w-full shadow-lg rounded-lg pointer-events-auto flex items-center p-4 ring-1 ring-sky-300  ring-opacity-5"
        >
          <Image
            src={formData.avatar}
            alt="Avatar"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold text-gray-900">
              {formData.name}'s profile updated!
            </p>
            <p className="text-sm text-gray-500">Changes saved successfully.</p>
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="text-gray-400 hover:text-gray-600 transition ml-2"
          >
            <IoClose size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  ), { duration: 3000 });
};

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="relative max-w-3xl mx-auto px-6 py-8 min-h-screen flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <IoClose size={26} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">Creator Profile</h2>

        {/* Avatar */}
        <div className="flex justify-center relative mb-8">
          <img
            src={formData.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          {isEditing && (
            <>
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-1 right-[calc(50%-12px)] bg-white p-1 rounded-full border shadow-md cursor-pointer"
              >
                <MdEdit size={16} className="text-sky-500" />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </>
          )}
        </div>

        {/* Profile Info */}
        <div className="space-y-6">
          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
            <div className="w-full">
              <label className="text-sm text-gray-500">Full Name</label>
              {isEditing ? (
                <input
                    className={`w-full text-sm p-3 rounded-md outline-none transition 
                      ${isEditing ? 'border border-sky-500 bg-white' : 'border-none bg-transparent'}`}
                  value={formData.name}
                  onChange={(e) => onChange('name', e.target.value)}
                />
              ) : (
                <p className="font-medium text-black mt-1">{formData.name}</p>
              )}
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <label className="text-sm text-gray-500">Email Address</label>
              {isEditing ? (
                <input
                  className={`w-full text-sm p-3 rounded-md outline-none transition 
                    ${isEditing ? 'border border-sky-500 bg-white' : 'border-none bg-transparent'}`}
                  value={formData.email}
                  onChange={(e) => onChange('email', e.target.value)}
                />
              ) : (
                <p className="font-medium text-black mt-1">{formData.email}</p>
              )}
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="text-sm text-gray-500">Bio</label>
            {isEditing ? (
              <textarea
                className={`w-full mt-1 border rounded-lg p-3 text-sm resize-none outline-none transition
                  ${isEditing ? 'border border-sky-500 bg-white' : 'border-none bg-transparent'}`}
                rows={3}
                value={formData.bio}
                onChange={(e) => onChange('bio', e.target.value)}
              />
            ) : (
              <p className="text-black mt-1">{formData.bio}</p>
            )}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base text-lg text-black mb-2">Social Links</h3>

            {/* Twitter */}
            {isEditing ? (
              <div className={`flex items-center border rounded-lg p-3 mb-3
                  ${isEditing ? 'border border-sky-500 bg-white' : 'border-none bg-transparent'}`}>
                <FaXTwitter className="text-xl mr-2" />
                <input
                  className="w-full text-sm outline-none"
                  value={formData.twitter}
                  onChange={(e) => onChange('twitter', e.target.value)}
                  placeholder="Twitter URL"
                />
              </div>
            ) : (
              formData.twitter && (
                <div className="flex items-center gap-2 mb-2">
                  <FaXTwitter className="text-xl" />
                  <a
                    href={formData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black break-all hover:underline"
                  >
                    {formData.twitter}
                  </a>
                </div>
              )
            )}

            {/* Instagram */}
            {isEditing ? (
              <div className={`flex items-center border rounded-lg p-3
                  ${isEditing ? 'border border-sky-500 bg-white' : 'border-none bg-transparent'}`}>
                <FaInstagram className="text-xl mr-2" />
                <input
                  className="w-full text-sm outline-none"
                  value={formData.instagram}
                  onChange={(e) => onChange('instagram', e.target.value)}
                  placeholder="Instagram URL"
                />
              </div>
            ) : (
              formData.instagram && (
                <div className="flex items-center gap-2">
                  <FaInstagram className="text-xl" />
                  <a
                    href={formData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black break-all hover:underline"
                  >
                    {formData.instagram}
                  </a>
                </div>
              )
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex sm:justify-between gap-4 edit-btns">
          <button
            onClick={() => {
              if (isEditing) setIsEditing(false);
              else onClose();
            }}
            className={`w-full sm:w-1/2 py-3 rounded-lg font-medium transition
              ${isEditing
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
            `}
          >
            {isEditing ? 'Cancel Edit' : 'Close'}
          </button>

          <button
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className="w-full sm:w-1/2 bg-sky-500 text-white py-3 rounded-lg font-medium hover:bg-sky-600 transition"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}