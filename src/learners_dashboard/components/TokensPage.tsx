import React from 'react';
import { Gift, Trophy, Hexagon, Circle, ChevronLeft } from 'lucide-react';

interface RewardItemProps {
  title: string;
  isClaimed: boolean;
  type: 'token' | 'reward' | 'badge';
  icon: React.ReactNode;
}

const RewardRow: React.FC<RewardItemProps> = ({ title, isClaimed, type, icon }) => (
  <div className="flex items-center justify-between py-8 border-b border-gray-100 last:border-0">
    <div className="flex items-center gap-8">
      {/* Icon Container */}
      <div className="w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-gray-800 font-bold text-lg max-w-md">
        {title}
      </p>
    </div>

    {/* Dynamic Button State */}
    <button
      disabled={isClaimed}
      className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${
        isClaimed
          ? 'bg-blue-500 text-white shadow-sm'
          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
      }`}
    >
      {isClaimed ? 'Claimed' : `Claim ${type.charAt(0).toUpperCase() + type.slice(1)}`}
    </button>
  </div>
);

interface TokensPageProps {
  setActivePage: (page: string) => void;
}

const RewardsPage: React.FC<TokensPageProps> = ({ setActivePage }) => {
  const rewards = [
    {
      title: "Completed Web3 Identity 101",
      isClaimed: true,
      type: "token",
      icon: <div className="bg-yellow-400 rounded-full p-2 text-yellow-100 shadow-inner"><Circle fill="currentColor" size={28} /></div>
    },
    {
      title: "You completed three courses in a day",
      isClaimed: false,
      type: "reward",
      icon: <Gift className="text-red-500" size={32} />
    },
    {
      title: "Completed the DAO Design module",
      isClaimed: false,
      type: "token",
      icon: <div className="bg-yellow-400 rounded-full p-2 text-yellow-100 shadow-inner"><Circle fill="currentColor" size={28} /></div>
    },
    {
      title: "You were a top contributor in forums this week",
      isClaimed: false,
      type: "reward",
      icon: <Trophy className="text-yellow-500" size={32} />
    },
    {
      title: "You've earned the 'Smart Contract Rookie' badge!",
      isClaimed: false,
      type: "reward",
      icon: <Hexagon className="text-yellow-500 border-yellow-500" size={32} strokeWidth={3} />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen p-8 font-sans">
      {/* Header */}
      <header className="flex items-center justify-center mb-12 relative">
        {/* <button 
          onClick={() => setActivePage('courseDetails')}
          className="absolute left-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="text-gray-800" size={24} />
        </button> */}
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Tokens and Rewards
        </h1>
      </header>

      {/* Rewards List */}
      <div className="flex flex-col">
        {rewards.map((reward, index) => (
          <RewardRow
            key={index}
            title={reward.title}
            isClaimed={reward.isClaimed}
            type={reward.type as any}
            icon={reward.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default RewardsPage;