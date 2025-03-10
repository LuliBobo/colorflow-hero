
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const scale = 0.5 + scrollPosition / window.innerHeight * 1.5;
        imageRef.current.style.transform = `scale(${Math.min(scale, 2)})`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 animate-text gradient-text">
            Build Smarter, Launch Faster<br />with Citizen Developer App
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your ideas into reality without writing a single line of code
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
              Start monitoring now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Schedule demo
            </button>
          </div>
        </div>
        <div className="mt-16">
          <img ref={imageRef} alt="Dashboard Preview" src="/lovable-uploads/1e7995b5-3727-416c-b64a-423be03ecad2.jpg" className="rounded-xl shadow-5xl scale-on-scroll object-scale-down" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
