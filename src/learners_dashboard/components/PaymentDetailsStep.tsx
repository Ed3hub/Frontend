import React from 'react';

interface PaymentDetailsStepProps {
  onPaymentSuccess: () => void;
  onBack: () => void;
}

export default function PaymentDetailsStep({ onPaymentSuccess, onBack }: PaymentDetailsStepProps) {
  const Phone = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8.353 4.82c-.838-.438-2.069-.632-2.906-.222c-.242.119-.353.277-.428.528c-.081.27-.098.561-.12.958l-.01.167l.03.587a14.07 14.07 0 0 0 5.192 10.23l.93.754a9.1 9.1 0 0 0 3.824 1.827l.214.045c.38.082.652.14.92.13c.24-.007.414-.068.593-.28c.338-.402.577-.943.678-1.508c.1-.554.053-1.052-.084-1.399a.65.65 0 0 0-.438-.33l-.758-.157l-1.572-.295a.7.7 0 0 0-.147.085l-.01.008a3 3 0 0 0-.121.12q-.018.016-.037.037l-.004.004a2.5 2.5 0 0 1-.542.44c-.545.31-1.126.26-1.604.096c-.7-.239-1.195-.748-1.512-1.083l-.896-.947a14 14 0 0 1-1.41-1.752l-.19-.28q-.074-.107-.18-.252c-.223-.311-.527-.735-.721-1.129l-.106-.223c-.55-1.208.144-2.413 1.124-2.888a.45.45 0 0 0 .251-.366l.133-1.63l.059-.953a.37.37 0 0 0-.152-.321Zm6.305 15.808l-.208.977a11.1 11.1 0 0 1-4.668-2.229l-.93-.754A16.07 16.07 0 0 1 2.92 6.937l-.035-.697l.004-.056l.009-.168c.02-.383.049-.945.204-1.463c.2-.668.621-1.338 1.465-1.752c1.627-.795 3.566-.352 4.713.248a2.37 2.37 0 0 1 1.22 2.217l-.06.973l-.135 1.648a2.45 2.45 0 0 1-1.37 2.003a.36.36 0 0 0-.175.166a.1.1 0 0 0-.012.052q-.002.013.01.04q.04.09.08.17c.116.234.265.442.453.704c.093.129.195.27.307.435l.19.28a12 12 0 0 0 1.21 1.502l.896.947c.324.343.522.503.705.566l.022.006l.048-.048l.025-.026c.082-.086.241-.252.433-.386c.34-.237.915-.55 1.631-.415l1.62.304l.777.161c.8.167 1.473.694 1.835 1.423l.014.028l.012.029c.332.786.376 1.707.223 2.56c-.154.86-.524 1.738-1.118 2.444c-.607.72-1.356.968-2.056.99c-.538.018-1.085-.102-1.452-.182l-.159-.034l.204-.98Z" clipRule="evenodd"/></svg>);


  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-[40px] w-full max-w-md p-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-6"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>

        <div className="w-10 h-10 bg-cyan-100 rounded-full flex mx-auto items-center justify-center mb-6 shadow-[0_0_15px_rgba(165,243,252,0.8)]">
          <span className="text-white text-lg"><Phone /></span>
        </div>
        <h2 className="text-2xl font-bold text-center mb-1">Payment Details</h2>
        <p className="text-gray-400 text-sm text-center mb-6">Review and confirm your payment</p>

        {/* Course summary */}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl mb-6 text-left">
          <div className="w-12 h-12 bg-blue-900 rounded-lg overflow-hidden flex items-center justify-center text-[10px] text-white">
            <img src="/payment_bg.svg" alt="payment_bg" className='w-full h-full object-cover' />
          </div>
          <div>
            <p className="font-bold text-sm">Blockchain fundamental</p>
            <p className="text-xs text-gray-400">by Steve Jobs</p>
          </div>
        </div>

        {/* Network selector */}
        <div className="flex px-16 justify-between mb-8 text-sm font-medium">
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
