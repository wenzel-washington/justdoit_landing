import { Zap, Code2, Users } from 'lucide-react';
import LiquidEther from './components/LiquidEther';
import GlassHeader from './components/GlassHeader';
import EmailSignup from './components/EmailSignup';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative text-white">
      <div className="fixed inset-0 z-0 bg-[#0a0a1a]">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoResumeDelay={5000}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <GlassHeader />

      <main className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Stop overthinking.<br />
                Start shipping.
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Build mini-apps in minutes.<br />
                No code. No excuses. No BS.
              </p>
            </div>

            <EmailSignup />

            <p className="text-white/70">
              Join builders who ship, not plan.
            </p>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Zap}
                title="Ship Fast"
                description="Build and launch in 2 hours."
              />
              <FeatureCard
                icon={Code2}
                title="No Code"
                description="From idea to live tool instantly."
              />
              <FeatureCard
                icon={Users}
                title="Community"
                description="Cool heads. Warm hearts. Build together."
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold">
              Ready to stop overthinking?
            </h3>
            <EmailSignup />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
