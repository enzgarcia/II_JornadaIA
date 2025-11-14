import React from 'react';
import { Brain, Zap, Shield, Wallpaper, LandPlot } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 lg:pb-32 overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src="/imagen-ilustratuva.png"
          alt="AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-blue-900/80 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 lg:pb-8 text-center">
        <div className="mb-4 lg:mb-8 animate-fade-in">
          <div className="inline-block mb-2 lg:mb-4">
            <img
              src="/Logo Jornada.png"
              alt="Dirección General de Comunicaciones, Informática y Ciberdefensa"
              /*className="h-24 sm:h-32 lg:h-40 w-auto mx-auto"*/
              className="h-64 sm:h-80 lg:h-96 w-auto mx-auto"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            II Jornada de Trabajo
            <br />
            {/* El degradado en el texto se mantiene como lo hablamos */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-normal">
              Inteligencia Artificial
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-normal">
            2025
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white italic">
              "Impulsando el futuro de la Defensa <br /> con tecnología de vanguardia"
            </p>

          {/*<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg lg:text-xl text-slate-200 mb-8">
            <span className="font-semibold">18 NOV</span>
          </div>*/}

        </div>

        <div className="mt-12 lg:mt-16 text-slate-300 text-sm sm:text-base">
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-slate-300 mt-8">
           Dirección General de Comunicaciones, <br className="lg:hidden" /> Informática y Ciberdefensa
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;