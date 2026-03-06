import React from 'react';

type PaymentMethod = 'card' | 'bank' | 'crypto';

interface PaymentMethodStepProps {
  selected: PaymentMethod;
  setSelected: (m: PaymentMethod) => void;
  onNext: () => void;
}

// Left panel illustration
const LeftPanel = () => (
  <div className="hidden md:flex md:w-1/2 bg-slate-900 p-12 flex-col justify-center items-center text-white relative overflow-hidden">
    <div className="relative z-10 text-center">
      <div className="mb-8 p-6 bg-white/10 rounded-3xl backdrop-blur-md flex flex-col items-center gap-4">
        {/* Dollar bills / money illustration */}
        <div className="relative w-56 h-36 flex items-center justify-center">
          {/* Background bill */}
          <div className="absolute left-2 top-2 w-48 h-28 bg-emerald-700/60 rounded-xl border border-emerald-500/40 flex items-center justify-center rotate-[-6deg]">
            <span className="text-5xl font-black text-emerald-300/70">$</span>
          </div>
          {/* Middle bill */}
          <div className="absolute left-4 top-4 w-48 h-28 bg-emerald-700/80 rounded-xl border border-emerald-400/50 flex items-center justify-center rotate-[-2deg]">
            <span className="text-5xl font-black text-emerald-200/80">$</span>
          </div>
          {/* Front bill */}
          <div className="relative w-48 h-28 bg-emerald-600 rounded-xl border border-emerald-400 flex items-center justify-center shadow-xl">
            <span className="text-6xl font-black text-white drop-shadow">$</span>
          </div>
        </div>
        <p className="text-sm text-white/60 font-medium tracking-widest uppercase">Secure Payment</p>
      </div>
      <h3 className="text-2xl font-extrabold tracking-tight">Pay with ease</h3>
      <p className="text-white/50 text-sm mt-2">Fast, secure, and flexible checkout</p>
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
  </div>
);

export default function PaymentMethodStep({ selected, setSelected, onNext }: PaymentMethodStepProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row min-h-[560px]">
        <LeftPanel />

        {/* Form */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
            <span className="text-cyan-500 text-lg">💳</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Choose payment method</h2>
          <p className="text-gray-400 text-sm mb-8">Select how you'd like to complete your purchase</p>

          <div className="space-y-4 mb-8">
            {([
              { id: 'card', title: 'Card payment', sub: 'Pay with debit/credit card', icon: '🔴🟡' },
              { id: 'bank', title: 'Bank Transfer', sub: 'Pay with bank transfer', icon: '🏛️' },
              { id: 'crypto', title: 'Crypto payment', sub: 'Pay with USDC or USDT stablecoins', icon: '🔷' },
            ] as { id: PaymentMethod; title: string; sub: string; icon: string }[]).map((item) => (
              <label
                key={item.id}
                className={`flex items-center p-4 border rounded-2xl cursor-pointer transition-all ${
                  selected === item.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:bg-gray-50'
                }`}
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl mr-4 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
                <input
                  type="radio"
                  name="pay"
                  className="w-4 h-4 accent-blue-500"
                  checked={selected === item.id}
                  onChange={() => setSelected(item.id)}
                />
              </label>
            ))}
          </div>

          <button
            onClick={onNext}
            className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold hover:bg-cyan-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
