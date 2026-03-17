'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Popup from '@/components/jivan/Popup';

interface PopupOptions {
  title?: string;
  content: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

interface PopupContextType {
  openPopup: (options: PopupOptions) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<PopupOptions | null>(null);

  const openPopup = useCallback((opts: PopupOptions) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => setIsOpen(false), []);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {options && (
        <Popup isOpen={isOpen} onClose={closePopup} title={options.title} size={options.size}>
          {options.content}
        </Popup>
      )}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error('usePopup must be used inside PopupProvider');
  return ctx;
}
