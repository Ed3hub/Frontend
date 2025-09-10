'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const StartDiscussionForm: React.FC = () => {
  const [group, setGroup] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const isFormFilled = group.trim() !== '' || title.trim() !== '' || body.trim() !== '';
  const isFormValid = group.trim() !== '' && title.trim() !== '' && body.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    toast.success('Discussion posted successfully!');
    setGroup('');
    setTitle('');
    setBody('');
  };

  const handleCancel = () => {
    setGroup('');
    setTitle('');
    setBody('');
    toast('Form cleared');
  };

  return (
    <div className="w-full h-full p-6">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Start a Discussion</h2>

        {/* Course Group */}
        <div className="w-full">
          <label htmlFor="group" className="block text-sm font-medium mb-1">Course Group</label>
          <select
            id="group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
          >
            <option value="">Select a group</option>
            <option value="group1">Group 1</option>
            <option value="group2">Group 2</option>
          </select>
        </div>

        {/* Title */}
        <div className="w-full">
          <label htmlFor="title" className="block text-sm font-medium mb-1">Title of Discussion</label>
          <input
            type="text"
            id="title"
            placeholder="Discussion title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        {/* Body */}
        <div className="w-full">
          <label htmlFor="body" className="block text-sm font-medium mb-1">Discussion Body</label>
          <textarea
            id="body"
            rows={6}
            placeholder="Description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600 resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="form-btns flex justify-between flex-wrap gap-10 mt-2">
          <button
            type="button"
            onClick={handleCancel}
            disabled={!isFormFilled}
            className={`form-cancel-btn flex-1 sm:flex-none sm:w-30 px-2 py-3 md:py-4 md:w-50 rounded-lg font-medium transition-colors duration-200 
              ${isFormFilled ? 'bg-red-600 text-white hover:bg-red-600' : 'bg-gray-100 border border-gray-200 text-black cursor-not-allowed'}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`flex-1 sm:flex-none sm:w-40 px-4 py-3 md:py-4 md:w-60 rounded-lg font-medium transition-colors duration-200 
              ${isFormValid ? 'bg-sky-600 text-white hover:opacity-90' : 'bg-sky-200 text-white cursor-not-allowed'}`}
          >
            Post Discussion
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartDiscussionForm;