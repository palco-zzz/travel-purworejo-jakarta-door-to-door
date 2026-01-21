import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWA: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-40 group flex items-center gap-3"
    >
      <span className="bg-white text-slate-800 px-4 py-2 rounded-full shadow-lg text-sm font-bold opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chat Admin
      </span>
      <div className="relative">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/40 transition-all transform hover:scale-110 flex items-center justify-center">
          <MessageCircle className="w-7 h-7" fill="currentColor" />
        </div>
      </div>
    </a>
  );
};

export default FloatingWA;