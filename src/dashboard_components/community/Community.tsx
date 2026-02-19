import React, { useState } from "react";
import { ChevronRight } from "lucide-react"; // Optional: if you want icons

const Community = () => {
  // State for toggles
  const [commentsEnabled, setCommentsEnabled] = useState(false);
  const [walletEnabled, setWalletEnabled] = useState(false);

  // Custom Toggle Component to match design
  interface ToggleProps { enabled: boolean; setEnabled: (v: boolean) => void; }
  const Toggle = ({ enabled, setEnabled }: ToggleProps) => (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-[#00AEEF]" : "bg-gray-400"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white font-sans text-[#1a1a1a]">
      {/* 1. Community and Interaction */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Community and Interaction</h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Enable this option to let learners post comments and participate in
          discussion threads within the course. Turn off to keep the course
          content read-only.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-400">
            Enable comments and discussions
          </span>
          <Toggle enabled={commentsEnabled} setEnabled={setCommentsEnabled} />
        </div>
      </section>

      {/* 2. Study Group Link */}
      <section className="mb-10">
        <h3 className="text-lg font-bold mb-4">
          Add a link to study group or discord channel
        </h3>
        <div className="border border-gray-200 rounded-xl p-4 bg-white">
          <p className="text-sm text-gray-800 mb-4">
            Connect with other learners in our study group or Discord channel to
            ask questions, share insights, and stay updated.
          </p>
          <a
            href="https://discord.gg/web3learnhub"
            className="text-[#00AEEF] text-sm hover:underline"
          >
            https://discord.gg/web3learnhub
          </a>
        </div>
      </section>

      {/* 3. Q&A Sessions */}
      <section className="mb-12">
        <h3 className="text-lg font-bold mb-2">Host Live Q&A Sessions</h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Engage your learners in real time by hosting live Q&A sessions. Answer
          their questions, provide guidance, and deepen understanding of key
          topics.
        </p>
        <div className="flex gap-4">
          <button className="flex-1 bg-[#00AEEF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#008ec3] transition-colors">
            Schedule a session
          </button>
          <button className="flex-1 bg-white border border-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Manage Live Events
          </button>
        </div>
      </section>

      {/* 4. Web3 Integration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Web3 Integration</h2>
        <p className="text-sm text-gray-600 mb-6">
          Connect wallets and manage on-chain certificates easily.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-400">
            Enable wallet connections to manage access
          </span>
          <Toggle enabled={walletEnabled} setEnabled={setWalletEnabled} />
        </div>
      </section>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-4 pt-8">
        <button className="bg-[#00AEEF] text-white py-2.5 px-10 rounded-lg font-bold hover:bg-[#008ec3] transition-colors">
          Save
        </button>
        <button className="bg-white border border-gray-300 text-gray-800 py-2.5 px-10 rounded-lg font-bold hover:bg-gray-50 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default Community;
