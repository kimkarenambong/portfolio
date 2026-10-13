import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const WhatsAppFloatingButton: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <aside 
      aria-label="WhatsApp quick contact" 
      className="fixed bottom-5 left-5 z-40 print:hidden"
    >
      <a
        href={personal.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-400 group cursor-pointer"
        title={`Chat on WhatsApp: ${personal.phone}`}
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current text-white transition-transform group-hover:rotate-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-ping" />
          </span>
        </div>
        <div className="hidden sm:flex flex-col text-left leading-none">
          <span className="text-[11px] font-extrabold tracking-tight">Chat on WhatsApp</span>
          <span className="text-[10px] font-medium text-emerald-100 mt-0.5">{personal.phone}</span>
        </div>
        <span className="sm:hidden text-xs font-bold">WhatsApp</span>
      </a>
    </aside>
  );
};
