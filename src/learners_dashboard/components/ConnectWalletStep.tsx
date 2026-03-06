import React from 'react';

type WalletType = 'metamask' | 'walletconnect' | 'coinbase';

interface ConnectWalletStepProps {
  selected: WalletType;
  setSelected: (w: WalletType) => void;
  onNext: () => void;
}

export default function ConnectWalletStep({ selected, setSelected, onNext }: ConnectWalletStepProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-md p-10">
        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
          <span className="text-cyan-500 text-lg">📞</span>
        </div>
        <h2 className="text-2xl font-bold mb-1">Connect Your Wallet</h2>
        <p className="text-gray-400 text-sm mb-8">Choose a wallet to proceed with payment</p>

        <div className="space-y-4 mb-8">
          {([
            { id: 'metamask', title: 'MetaMask', sub: 'Connect using browser extension', icon: '🦊' },
            { id: 'walletconnect', title: 'WalletConnect', sub: 'Scan QR code with mobile wallet', icon: '📱' },
            { id: 'coinbase', title: 'Coinbase Wallet', sub: 'Connect with Coinbase Wallet', icon: '🔵' },
          ] as { id: WalletType; title: string; sub: string; icon: string }[]).map((item) => (
            <label
              key={item.id}
              className={`flex items-center p-4 border rounded-2xl cursor-pointer transition-all ${
                selected === item.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl mr-4">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-400">{item.sub}</p>
              </div>
              <input
                type="radio"
                name="wallet"
                className="w-4 h-4 accent-blue-500"
                checked={selected === item.id}
                onChange={() => setSelected(item.id)}
              />
            </label>
          ))}
        </div>

        <button
          onClick={onNext}
          className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold hover:bg-cyan-600 transition-colors mb-4"
        >
          Next
        </button>

        <div className="bg-blue-50 p-4 rounded-xl text-xs text-gray-500 flex items-center justify-center gap-2">
          🔒 Your wallet connection is secure and encrypted.
        </div>
      </div>
    </div>
  );
}
