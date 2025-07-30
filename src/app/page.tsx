"use client";

import {
  Hero,
  AboutMe,
  CertificatesSkills,
  WhyHotelIndustry,
  Projects,
  Hobbies,
  PersonalStory,
  FinalMessage,
  Contact,
} from "../components/sections";

export default function Home() {
  return (
    <main className="font-sans relative text-gray-800 dark:text-gray-200">
          {/* Global Dynamic Background */}
          <div className="fixed inset-0 -z-50">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
            
            {/* Animated overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/15 to-cyan-500/10 animate-pulse" style={{animationDuration: '8s'}} />
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-pink-500/10 to-blue-600/8 animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}} />
            
            {/* Floating elements for non-hero sections */}
            <div className="absolute inset-0">
              {/* Large subtle shapes */}
              <div className="absolute top-1/2 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '15s'}} />
              <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/6 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '18s', animationDelay: '6s'}} />
              <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{animationDuration: '20s', animationDelay: '10s'}} />
              
              {/* Starfield */}
              {[...Array(40)].map((_, i) => {
                const size = Math.random() * 1.5 + 0.5; // 0.5–2px
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const delay = Math.random() * 20; // 0–20s
                const color = ['bg-cyan-300/40','bg-purple-300/40','bg-blue-300/40'][i%3];
                return (
                  <div key={i}
                    className={`absolute rounded-full animate-ping ${color}`}
                    style={{width: `${size}px`, height: `${size}px`, top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s`, animationDuration: '2s'}} />
                );
              })}
            </div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '100px 100px'
            }} />
          </div>

          <Hero />
          <AboutMe />
          <CertificatesSkills />
          <WhyHotelIndustry />
          <Projects />
          <Hobbies />
          <PersonalStory />
          <FinalMessage />
          <Contact />
    </main>
  );
}
