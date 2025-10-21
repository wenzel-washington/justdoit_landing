import { Github } from 'lucide-react';
import Glass from './Glass';

export default function Footer() {
  return (
    <footer className="pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <Glass blur={10} opacity={0.1} borderRadius={16}>
          <div className="py-4 px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <a
                  href="https://x.com/thisiswenzel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/wenzel-washington"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  contact
                </a>
                <span className="text-white/30">/</span>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  terms of use
                </a>
              </div>
            </div>
          </div>
        </Glass>
      </div>
    </footer>
  );
}
