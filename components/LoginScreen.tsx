
import React, { useState } from 'react';
import { Mail, EyeOff, LogIn, MousePointer2 } from 'lucide-react';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-sm flex flex-col items-center space-y-8 animate-fade-in">
      {/* Logo Section */}
      <div className="flex flex-col items-center relative mb-4">
        {/* Globe Icon and Stars */}
        <div className="relative w-32 h-32 mb-2">
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#880e4f]" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {/* Decorative Stars */}
          <div className="absolute top-0 right-2 text-[#d4af37]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          <div className="absolute top-6 -right-1 text-[#d4af37]">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
        </div>
        
        {/* Logo Text */}
        <div className="text-center">
          <h1 className="font-logo text-5xl font-medium text-[#880e4f] leading-tight">
            Milhas
          </h1>
          <h1 className="font-logo text-5xl font-medium text-[#880e4f] -mt-2 ml-12">
            Mágicas
          </h1>
          
          {/* Subtext curved vibe */}
          <div className="flex flex-col items-center -mt-1">
             <span className="text-[10px] tracking-[0.2em] text-[#c4a484] uppercase font-medium">
               Por Audrey Olaia
             </span>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="w-full space-y-4">
        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="w-full bg-white border border-gray-800 rounded-2xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#880e4f] transition-all text-sm placeholder-gray-500"
          />
          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 w-5 h-5" />
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full bg-white border border-gray-800 rounded-2xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#880e4f] transition-all text-sm placeholder-gray-500"
          />
          <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 w-5 h-5" />
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#fceef3] hover:bg-[#fbdde8] border border-gray-200 shadow-sm rounded-2xl py-3 flex items-center justify-center space-x-2 transition-all group active:scale-[0.98]">
          <LogIn className="w-5 h-5 text-gray-800 group-hover:translate-x-1 transition-transform" />
          <span className="text-gray-800 font-medium text-sm">Entrar</span>
        </button>
      </div>

      {/* Footer Actions */}
      <div className="w-full flex flex-col items-center space-y-6">
        <button className="text-sm font-medium text-gray-800 hover:text-[#880e4f] transition-colors">
          Esqueci minha senha
        </button>

        <button className="w-full bg-[#880e4f] hover:bg-[#701a4e] text-white rounded-2xl py-4 flex items-center justify-center space-x-2 shadow-lg transition-all active:scale-[0.98]">
          <span className="font-medium">Primeiro Acesso</span>
          <MousePointer2 className="w-5 h-5 fill-current rotate-12" />
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
