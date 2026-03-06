import React from 'react';

interface PaymentDetailsStepProps {
  onPaymentSuccess: () => void;
}

export default function PaymentDetailsStep({ onPaymentSuccess }: PaymentDetailsStepProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-md p-10">
        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
          <span className="text-cyan-500 text-lg">📞</span>
        </div>
        <h2 className="text-2xl font-bold mb-1">Payment Details</h2>
        <p className="text-gray-400 text-sm mb-6">Review and confirm your payment</p>

        {/* Course summary */}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl mb-6 text-left">
          <div className="w-12 h-12 bg-blue-900 rounded-lg overflow-hidden flex items-center justify-center text-[10px] text-white">
            IMAGE
          </div>
          <div>
            <p className="font-bold text-sm">Blockchain fundamental</p>
            <p className="text-xs text-gray-400">by Steve Jobs</p>
          </div>
        </div>

        {/* Network selector */}
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
          <span className="text-gray-400 cursor-pointer">Ethereum</span>
          <span className="text-cyan-500 border-b-2 border-cyan-500 pb-1 cursor-pointer">Polygon</span>
        </div>

        {/* Token selector */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 border-2 border-cyan-400 rounded-2xl bg-white shadow-sm text-center">
            <p className="font-bold">USDC</p>
            <p className="text-[10px] text-gray-400">USD Coin</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-2xl text-gray-400 bg-gray-50 text-center">
            <p className="font-bold">USDT</p>
            <p className="text-[10px]">Tether</p>
          </div>
        </div>

        {/* Price breakdown */}
        <div className="space-y-3 mb-8 text-sm px-2">
          <div className="flex justify-between text-gray-400">
            <span>Course Price:</span> <span>$49.99</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Network Fee:</span> <span>~$2.50</span>
          </div>
          <div className="flex justify-between font-bold text-gray-800 pt-2 border-t border-dashed">
            <span>Amount to Pay:</span> <span>50.00 USDC</span>
          </div>
        </div>

        <button
          onClick={onPaymentSuccess}
          className="w-full bg-cyan-500 text-white py-4 rounded-xl font-bold hover:bg-cyan-600 transition-colors mb-4"
        >
          Pay 50.00 USDC
        </button>

        <div className="bg-blue-50 p-4 rounded-xl text-xs text-gray-500 text-center">
          🔒 Payment will be processed through a secure smart contract
        </div>
      </div>
    </div>
  );
}
