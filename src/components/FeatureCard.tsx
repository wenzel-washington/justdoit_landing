import { Wrench, Rocket, Flame } from 'lucide-react';
import Glass from './Glass';

const cards = [
  {
    icon: Wrench,
    title: "30+ Free Tools",
    description: "Background removers, downloaders, converters. The last tab you'll ever need to open.",
    position: 'left' as const,
  },
  {
    icon: Rocket,
    title: "Ship in Hours",
    description: "No code. No complexity. No excuses. Build and launch before lunch.",
    position: 'middle' as const,
  },
  {
    icon: Flame,
    title: "No BS Community",
    description: "Builders who finish what they start. Share wins. Kill procrastination. Ship.",
    position: 'right' as const,
  },
];

export default function FeatureCard() {
  return (
    <div className="relative h-[400px] w-full max-w-5xl group/container">
      <div className="absolute inset-0 flex items-center justify-center">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={card.position}
              className={`
                absolute w-[320px] transition-all duration-700 ease-out
                ${card.position === 'left' ? 'card-left' : ''}
                ${card.position === 'middle' ? 'card-middle' : ''}
                ${card.position === 'right' ? 'card-right' : ''}
              `}
              style={{
                zIndex: card.position === 'middle' ? 30 : card.position === 'left' ? 20 : 10,
              }}
            >
              <Glass blur={12} opacity={0.08} borderRadius={16}>
                <div className="p-8 h-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-white/10 transition-all duration-500 group-hover/card:bg-white/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                    <p className="text-base text-white/80 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </Glass>
            </div>
          );
        })}
      </div>

      <style>{`
        .card-left {
          transform: translateX(-80px) rotate(-12deg);
        }

        .card-middle {
          transform: translateX(0) translateY(0);
        }

        .card-right {
          transform: translateX(80px) rotate(12deg);
        }

        .group\/container:hover .card-left {
          transform: translateX(-380px) rotate(-4deg);
        }

        .group\/container:hover .card-middle {
          transform: translateX(0) translateY(-20px);
        }

        .group\/container:hover .card-right {
          transform: translateX(380px) rotate(4deg);
        }

        .card-left:hover,
        .card-middle:hover,
        .card-right:hover {
          transform: translateY(-40px) scale(1.08) rotate(0deg) !important;
          z-index: 50 !important;
        }

        .card-left:hover .glass-container,
        .card-middle:hover .glass-container,
        .card-right:hover .glass-container {
          box-shadow:
            0 8px 32px 0 rgba(0, 0, 0, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.2),
            0 0 60px 10px rgba(130, 80, 255, 0.6),
            0 0 100px 20px rgba(255, 159, 252, 0.4);
        }
      `}</style>
    </div>
  );
}
