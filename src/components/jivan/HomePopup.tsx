'use client';
import { useEffect, useRef, useState } from 'react';

export function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('jivanPopupShown')) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('jivanPopupShown', 'true');
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  // Sync state when closed via ESC key
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setIsOpen(false);
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, []);

  // Close when clicking the backdrop (outside the inner box)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clickedOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (clickedOutside) setIsOpen(false);
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="w-[92vw] max-w-[480px] p-0 rounded-2xl shadow-2xl border-0 
        backdrop:bg-black/70 backdrop:backdrop-blur-sm
        open:animate-popup-in overflow-hidden"
    >
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close"
        className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/80 text-white 
          rounded-full w-8 h-8 flex items-center justify-center text-lg leading-none 
          transition-all duration-200 hover:scale-110"
      >
        ✕
      </button>

      {/* Event Poster Image */}
      <div className="w-full">
        <img
          src="img/event/buddhapurnima.png"
          alt="Buddhapurnima Special Meditation Awakening Camp"
          className="w-full object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="bg-white px-5 py-4 flex flex-col gap-3">
        {/* WhatsApp CTA */}
        <a
          href="https://api.whatsapp.com/send/?phone=9779818514837&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#1ebe5d] 
            text-white font-semibold py-3 rounded-xl transition-all duration-300 
            hover:shadow-lg hover:scale-[1.02] text-sm"
        >
          {/* WhatsApp SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.215a.75.75 0 0 0 .906.919l5.526-1.451A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.732 9.732 0 0 1-4.964-1.355l-.355-.212-3.681.967.984-3.595-.232-.371A9.722 9.722 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          Contact Us on WhatsApp
        </a>

        {/* More Info link — placeholder, update href later */}
        <a
          href="/programs/buddhapurnima-meditation-camp"
          className="flex items-center justify-center gap-1.5 w-full border border-[#07486d] 
            text-[#07486d] font-medium py-2.5 rounded-xl text-sm hover:bg-[#07486d] 
            hover:text-white transition-all duration-300 hover:shadow-md"
        >
          More Info
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
          </svg>
        </a>

        {/* Dismiss */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors py-0.5"
        >
          Remind me later
        </button>
      </div>
    </dialog>
  );
}
