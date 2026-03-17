'use client';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
};

export default function Popup({ isOpen, onClose, title, children, size = 'md' }: PopupProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  // Close on ESC (native dialog handles this, but we sync state)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={`w-[90vw] ${sizeMap[size]} rounded-2xl p-0 shadow-2xl border-0 
        backdrop:bg-black/60 backdrop:backdrop-blur-sm
        open:animate-popup-in`}
      style={{ maxHeight: '90vh' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100">
        {title ? (
          <h2 className="text-xl font-semibold text-[#07486d]">{title}</h2>
        ) : (
          <span />
        )}
        <button
          onClick={onClose}
          className="ml-auto p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-all duration-200"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
      </div>

      {/* Body */}
      <div className="px-6 py-5 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
        {children}
      </div>
    </dialog>
  );
}
