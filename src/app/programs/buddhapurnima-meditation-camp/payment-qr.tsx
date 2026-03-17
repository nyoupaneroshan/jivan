'use client';
import { useState } from 'react';

export function PaymentQR() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex justify-center">
      {!hasError ? (
        <img
          src="/img/event/payment-qr.jpg"
          alt="Payment QR Code"
          className="w-44 h-44 object-contain rounded-xl border border-gray-100"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-44 h-44 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-gray-50 text-center p-4">
          {/* <span className="text-3xl">📷</span> */}
          <span className="text-xs text-gray-400 mt-1">QR Code</span>
          {/* <span className="text-[10px] text-gray-400">Coming Soon</span> */}
          <img
          src="/img/event/payment-qr.png"
          alt="Payment QR Code"
          className="w-44 h-44 object-contain rounded-xl border border-gray-100"
          
        />
        </div>
      )}
    </div>
  );
}
