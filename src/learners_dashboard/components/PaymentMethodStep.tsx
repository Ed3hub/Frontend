import React from 'react';

type PaymentMethod = 'card' | 'bank' | 'crypto';

interface PaymentMethodStepProps {
  selected: PaymentMethod;
  setSelected: (m: PaymentMethod) => void;
  onNext: () => void;
}

// --- SVG icons ---
const MastercardIcon = () => (
  <svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="12" r="11" fill="#EB001B" />
    <circle cx="23" cy="12" r="11" fill="#F79E1B" />
    <path d="M19 5.9A11 11 0 0 1 23 12a11 11 0 0 1-4 6.1A11 11 0 0 1 15 12a11 11 0 0 1 4-6.1z" fill="#FF5F00" />
  </svg>
);

const BankIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11" />
  </svg>
);

const EthereumIcon = () => (
  <svg viewBox="0 0 24 38" width="20" height="32" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12,0 0,19 12,25 24,19" fill="#627EEA" opacity="0.9" />
    <polygon points="12,0 24,19 12,25" fill="#3C5DC7" opacity="0.7" />
    <polygon points="12,27 0,21 12,38 24,21" fill="#627EEA" opacity="0.9" />
    <polygon points="12,27 24,21 12,38" fill="#3C5DC7" opacity="0.7" />
  </svg>
);

// Left panel illustration
const LeftPanel = () => (
  <div className="hidden md:flex md:w-1/2 bg-white flex-col justify-start items-center text-white relative overflow-hidden">
    <img src="/payment_bg.svg" alt="payment bacground" className='w-full h-1/2 object-contain' />
    <div className="relative z-10 text-center text-black">
      <h3 className="text-2xl font-extrabold tracking-tight text-black">Pay with ease</h3>
      <p className="text-sm mt-2 text-black">Fast, secure, and flexible payment</p>
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
  </div>
);

const paymentOptions: { id: PaymentMethod; title: string; sub: string; icon: React.ReactNode }[] = [
  { id: 'card',   title: 'Card payment',   sub: 'Pay with debit/credit card',             icon: <MastercardIcon /> },
  { id: 'bank',   title: 'Bank Transfer',  sub: 'Pay with bank transfer',                  icon: <BankIcon /> },
  { id: 'crypto', title: 'Crypto payment', sub: 'Pay with USDC or USDT stablecoins',       icon: <EthereumIcon /> },
];

export default function PaymentMethodStep({ selected, setSelected, onNext }: PaymentMethodStepProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="bg-white overflow-hidden w-full max-w-4xl flex flex-col md:flex-row min-h-[560px]">
        <LeftPanel />

        {/* Form */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center mx-auto justify-center mb-6 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
            <span className="text-cyan-500 text-lg">💳</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Choose payment method</h2>
          <p className="text-gray-400 text-sm mb-8">Select how you'd like to complete your purchase</p>

          <div className="space-y-4 mb-8">
            {paymentOptions.map((item) => (
              <label
                key={item.id}
                className={`flex items-center p-4 border rounded-2xl cursor-pointer transition-all ${
                  selected === item.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:bg-gray-50'
                }`}
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4 shadow-sm">
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
