import { Wrench, Rocket, Flame } from 'lucide-react';
import EmailSignup from '../components/EmailSignup';
import FeatureCard from '../components/FeatureCard';

export default function HomePage() {
  return (
    <main className="relative z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <section className="flex flex-col items-center px-6 pt-32 md:pt-28 pb-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-6">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Stop overthinking.<br />
                Start shipping.
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed pb-6">
                Turn your ideas into live tools.<br />
                Today. Not someday.
              </p>
            </div>

            <EmailSignup />

            <p className="text-xl md:text-2xl text-white/80 pt-6">
              Join builders who ship, not plan.
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto flex justify-center">
            <FeatureCard />
          </div>
        </section>
      </div>
    </main>
  );
}
