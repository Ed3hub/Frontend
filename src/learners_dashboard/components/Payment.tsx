import React, { useState } from 'react';

// --- Types & Mock Data ---
type PaymentMethod = 'card' | 'bank' | 'crypto';
type WalletType = 'metamask' | 'walletconnect' | 'coinbase';
type Step = 'CHOOSE_METHOD' | 'CONNECT_WALLET' | 'PAYMENT_DETAILS';

// --- Sub-Components ---

// 1. Payment Method Selection
const PaymentMethodStep = ({ onNext, selected, setSelected }: any) => (
  <div className="max-w-md mx-auto p-6 text-center">
    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
      <span className="text-cyan-500">💳</span>
    </div>
    <h2 className="text-2xl font-bold mb-1">Choose payment method</h2>
    <p className="text-gray-400 text-sm mb-8">Select how you'd like to complete your purchase</p>
    
    <div className="space-y-4 mb-8">
      {[
        { id: 'card', title: 'Card payment', sub: 'Pay with debit/credit card', icon: '🔴🟡' },
        { id: 'bank', title: 'Bank Transfer', sub: 'Pay with bank transfer', icon: '🏛️' },
        { id: 'crypto', title: 'Crypto payment', sub: 'Pay with USDC or USDT stablecoins', icon: '🔷' },
      ].map((item) => (
        <label key={item.id} className={`flex items-center p-4 border rounded-2xl cursor-pointer transition-all ${selected === item.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:bg-gray-50'}`}>
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl mr-4 shadow-sm">{item.icon}</div>
          <div className="flex-1 text-left">
            <p className="font-bold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-400">{item.sub}</p>
          </div>
          <input type="radio" name="pay" className="w-4 h-4 accent-blue-500" checked={selected === item.id} onChange={() => setSelected(item.id as PaymentMethod)} />
        </label>
      ))}
    </div>
    <button onClick={onNext} className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold hover:bg-cyan-600 transition-colors">Next</button>
  </div>
);

// 2. Wallet Connection
const ConnectWalletStep = ({ onNext, selected, setSelected }: any) => (
  <div className="max-w-md mx-auto p-6 text-center">
    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
      <span className="text-cyan-500">📞</span>
    </div>
    <h2 className="text-2xl font-bold mb-1">Connect Your Wallet</h2>
    <p className="text-gray-400 text-sm mb-8">Choose a wallet to proceed with payment</p>
    
    <div className="space-y-4 mb-8">
      {[
        { id: 'metamask', title: 'MetaMask', sub: 'Connect using browser extension', icon: '🦊' },
        { id: 'walletconnect', title: 'WalletConnect', sub: 'Scan QR code with mobile wallet', icon: '📱' },
        { id: 'coinbase', title: 'Coinbase Wallet', sub: 'Connect with Coinbase Wallet', icon: '🔵' },
      ].map((item) => (
        <label key={item.id} className={`flex items-center p-4 border rounded-2xl cursor-pointer transition-all ${selected === item.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:bg-gray-50'}`}>
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl mr-4">{item.icon}</div>
          <div className="flex-1 text-left">
            <p className="font-bold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-400">{item.sub}</p>
          </div>
          <input type="radio" name="wallet" className="w-4 h-4 accent-blue-500" checked={selected === item.id} onChange={() => setSelected(item.id as WalletType)} />
        </label>
      ))}
    </div>
    <button onClick={onNext} className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold mb-6">Next</button>
    <div className="bg-blue-50 p-4 rounded-xl text-xs text-gray-500 flex items-center justify-center gap-2">
      🔒 Your wallet connection is secure and encrypted.
    </div>
  </div>
);

// 3. Final Payment Details
const PaymentDetailsStep = ({ onPaymentSuccess }: { onPaymentSuccess: () => void }) => (
  <div className="max-w-md mx-auto p-6 text-center">
    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
      <span className="text-cyan-500">📞</span>
    </div>
    <h2 className="text-2xl font-bold mb-1">Payment Details</h2>
    <p className="text-gray-400 text-sm mb-6">Review and confirm your payment</p>
    
    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl mb-6 text-left">
      <div className="w-12 h-12 bg-blue-900 rounded-lg overflow-hidden flex items-center justify-center text-[10px] text-white">IMAGE</div>
      <div>
        <p className="font-bold text-sm">Blockchain fundamental</p>
        <p className="text-xs text-gray-400">by Steve Jobs</p>
      </div>
    </div>

    <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
      <span className="text-gray-400 cursor-pointer">Ethereum</span>
      <span className="text-cyan-500 border-b-2 border-cyan-500 pb-1 cursor-pointer">Polygon</span>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="p-4 border-2 border-cyan-400 rounded-2xl bg-white shadow-sm">
        <p className="font-bold">USDT</p>
        <p className="text-[10px] text-gray-400">USD Coin</p>
      </div>
      <div className="p-4 border border-gray-100 rounded-2xl text-gray-400 bg-gray-50">
        <p className="font-bold">USDT</p>
        <p className="text-[10px]">Tether</p>
      </div>
    </div>

    <div className="space-y-3 mb-8 text-sm px-2">
      <div className="flex justify-between text-gray-400"><span>Course Price:</span> <span>$49.99</span></div>
      <div className="flex justify-between text-gray-400"><span>Network Fee:</span> <span>~$2.50</span></div>
      <div className="flex justify-between font-bold text-gray-800 pt-2 border-t border-dashed"><span>Amount to Pay:</span> <span>50.00 USDC</span></div>
    </div>

    <button
      onClick={onPaymentSuccess}
      className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold mb-6 hover:bg-cyan-600 transition-colors"
    >
      Pay 50.00 USDC
    </button>
    <div className="bg-blue-50 p-4 rounded-xl text-xs text-gray-500">
      🔒 Payment will be processed through a secure smart contract
    </div>
  </div>
);

// --- Types ---
interface CheckoutFlowProps {
  setActivePage: (page: string) => void;
  setSelectedCourse: (course: { title: string; instructor: string; img: string; showPurchaseModal?: boolean }) => void;
  course: { title: string; instructor: string; img: string; showPurchaseModal?: boolean } | null;
}

// --- Main Checkout Logic ---
export default function CheckoutFlow({ setActivePage, setSelectedCourse, course }: CheckoutFlowProps) {
  const [step, setStep] = useState<Step>('CHOOSE_METHOD');
  const [method, setMethod] = useState<PaymentMethod>('bank');
  const [wallet, setWallet] = useState<WalletType>('walletconnect');

  const handleNextFromStep1 = () => {
    if (method === 'crypto') {
      setStep('CONNECT_WALLET');
    } else {
      setStep('PAYMENT_DETAILS');
    }
  };

  const handlePaymentSuccess = () => {
    // Clear the purchase modal flag so courseDetails opens without the modal
    if (course) {
      setSelectedCourse({ ...course, showPurchaseModal: false });
    }
    setActivePage('courseDetails');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 flex items-center justify-center">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side: Illustration / Branding */}
        <div className="hidden md:flex md:w-1/2 bg-slate-900 p-12 flex-col justify-center items-center text-white relative overflow-hidden">
           <div className="relative z-10 text-center">
             <div className="mb-8 p-4 bg-white/10 rounded-3xl backdrop-blur-md">
                {/* Simplified laptop visual */}
                <div className="w-64 h-40 bg-slate-800 rounded-lg border border-white/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center text-2xl font-bold text-cyan-400">₿</div>
                </div>
             </div>
             {/* <h3 className="text-xl font-bold uppercase tracking-widest mt-12 opacity-80">Course Details</h3> */}
           </div>
           {/* Abstract Background Accents */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Right Side: Step Logic */}
        <div className="md:w-1/2 bg-white flex flex-col justify-center py-12">
          {step === 'CHOOSE_METHOD' && (
            <PaymentMethodStep selected={method} setSelected={setMethod} onNext={handleNextFromStep1} />
          )}
          {step === 'CONNECT_WALLET' && (
            <ConnectWalletStep selected={wallet} setSelected={setWallet} onNext={() => setStep('PAYMENT_DETAILS')} />
          )}
          {step === 'PAYMENT_DETAILS' && (
            <PaymentDetailsStep onPaymentSuccess={handlePaymentSuccess} />
          )}
        </div>
      </div>
    </div>
  );
}