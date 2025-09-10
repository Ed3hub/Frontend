'use client';

import { FaStar, FaBookOpen, FaCoins } from 'react-icons/fa';

export default function EarningsPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">Earnings & Engagement</h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          <StatCard
            icon={<FaStar className="text-blue-500 text-xl" />}
            value="4.7"
            label="Average Rating"
          />
          <StatCard
            icon={<FaBookOpen className="text-blue-500 text-xl" />}
            value="12"
            label="Total Courses"
          />
          <StatCard
            icon={<FaCoins className="text-blue-500 text-xl" />}
            value="50"
            label="Token Balance"
          />
        </div>

        {/* Earnings Graph */}
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Earnings</h3>
          </div>
          <h1 className="text-3xl font-bold mb-6">$12,500</h1>

          {/* Placeholder for Chart */}
          <div className="h-40 bg-gradient-to-b from-blue-200 to-white rounded-xl flex items-end relative overflow-hidden">
            {/* Fake chart line for now */}
            <div className="absolute left-0 bottom-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path
                  d="M0,60 C50,20 100,80 150,40 C200,0 250,60 300,30 C350,50 400,40 400,40"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="200" cy="40" r="6" fill="#3b82f6" />
              </svg>
            </div>
            <div className="w-full flex justify-between text-xs text-gray-500 px-2 pb-2">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
              <span>JUL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center justify-center text-center">
      <div className="mb-2">{icon}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}