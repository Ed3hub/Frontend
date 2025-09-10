'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ResetPassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidated, setIsValidated] = useState(false);

  const isFormFilled = oldPassword.trim() !== '' || newPassword.trim() !== '' || confirmPassword.trim() !== '';
  const isFormValid = oldPassword.trim() !== '' && newPassword.trim() !== '' && confirmPassword.trim() !== '';

  const handleValidate = () => {
    if (oldPassword === '123456') {
      setIsValidated(true);
      toast.success('Old password validated!');
    } else {
      toast.error('Incorrect old password');
    }
  };

  const handleSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    toast.success('Password changed successfully!');
    // Reset logic here
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsValidated(false);
  };

  const handleCancel = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsValidated(false);
    toast('Form cleared');
  };

  return (
    <div className="w-full h-full p-6 px-1 flex items-center justify-center bg-gray-50 text-black">
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>

        {/* Old Password */}
        <div className="mb-6">
          <label htmlFor="oldPassword" className="block mb-2 font-medium">
            Input Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            disabled={isValidated}
          />
        </div>

        {!isValidated && (
          <button
            type="button"
            onClick={handleValidate}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Validate
          </button>
        )}

        {/* New Password Fields */}
        <div className={`space-y-4 ${!isValidated ? 'opacity-50 pointer-events-none' : ''}`}>
          <div>
            <label htmlFor="newPassword" className="block mb-1">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-sky-600"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="form-btns flex justify-between flex-wrap gap-7 mt-2">
            <button
               type="button"
               onClick={handleCancel}
               disabled={!isFormFilled}
               className={`form-cancel-btn flex-1 sm:flex-none sm:w-20 px-2 py-3 md:py-4 md:w-30 rounded-lg font-medium transition-colors duration-200
                ${isFormFilled ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-100 border border-gray-200 text-black cursor-not-allowed'}`}
            >
               Cancel
            </button>

           <button
              type="button"
              onClick={handleSaveChanges}
              disabled={!isFormValid}
              className={`flex-1 sm:flex-none sm:w-30 px-4 py-3 md:py-4 md:w-40 rounded-lg font-medium transition-colors duration-200 
                ${isFormValid ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-sky-200 text-white cursor-not-allowed'}`}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}