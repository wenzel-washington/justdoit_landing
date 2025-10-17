import { useEffect, useState } from 'react';
import Glass from './Glass';

export default function GlassHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Glass blur={10} opacity={0.1} borderRadius={16}>
          <div
            className="flex transition-all duration-500 ease-out"
            style={{
              justifyContent: isScrolled ? 'flex-start' : 'center'
            }}
          >
            <h1
              className="text-2xl font-bold text-white tracking-tight py-2 transition-all duration-500 ease-out"
              style={{
                paddingLeft: isScrolled ? '1rem' : '0',
                paddingRight: isScrolled ? '1rem' : '0'
              }}
            >
              JustBuild.it
            </h1>
          </div>
        </Glass>
      </div>
    </header>
  );
}
