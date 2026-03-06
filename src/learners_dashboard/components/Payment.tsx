import React, { useState } from 'react';
import PaymentMethodStep from './PaymentMethodStep';
import ConnectWalletStep from './ConnectWalletStep';
import PaymentDetailsStep from './PaymentDetailsStep';

type PaymentMethod = 'card' | 'bank' | 'crypto';
type WalletType = 'metamask' | 'walletconnect' | 'coinbase';
type Step = 'CHOOSE_METHOD' | 'CONNECT_WALLET' | 'PAYMENT_DETAILS';

interface CheckoutFlowProps {
  setActivePage: (page: string) => void;
  setSelectedCourse: (course: { title: string; instructor: string; img: string; showPurchaseModal?: boolean }) => void;
  course: { title: string; instructor: string; img: string; showPurchaseModal?: boolean } | null;
}

export default function CheckoutFlow({ setActivePage, setSelectedCourse, course }: CheckoutFlowProps) {
  const [step, setStep] = useState<Step>('CHOOSE_METHOD');
  const [method, setMethod] = useState<PaymentMethod>('bank');
  const [wallet, setWallet] = useState<WalletType>('walletconnect');

  const handleNextFromMethodStep = () => {
    if (method === 'crypto') {
      setStep('CONNECT_WALLET');
    } else {
      setStep('PAYMENT_DETAILS');
    }
  };

  const handlePaymentSuccess = () => {
    if (course) {
      setSelectedCourse({ ...course, showPurchaseModal: false });
    }
    setActivePage('courseDetails');
  };

  if (step === 'CHOOSE_METHOD') {
    return (
      <PaymentMethodStep
        selected={method}
        setSelected={setMethod}
        onNext={handleNextFromMethodStep}
      />
    );
  }

  if (step === 'CONNECT_WALLET') {
    return (
      <ConnectWalletStep
        selected={wallet}
        setSelected={setWallet}
        onNext={() => setStep('PAYMENT_DETAILS')}
      />
    );
  }

  return <PaymentDetailsStep onPaymentSuccess={handlePaymentSuccess} />;
}