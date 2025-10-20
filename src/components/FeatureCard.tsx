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
    <div className="relative w-full max-w-[350px] md:max-w-[380px] h-[450px] md:h-[500px] group/container perspective-[1200px]">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.position}
            className={`
              card-base
              ${card.position === 'left' ? 'card-left' : ''}
              ${card.position === 'middle' ? 'card-middle' : ''}
              ${card.position === 'right' ? 'card-right' : ''}
            `}
          >
            <Glass blur={12} opacity={0.08} borderRadius={24}>
              <div className="p-8 md:p-10 h-full flex flex-col justify-center items-center text-center">
                <div className="icon-wrapper mb-6">
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{card.description}</p>
              </div>
            </Glass>
          </div>
        );
      })}

      <style>{`
        .card-base {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }

        .icon-wrapper {
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
        }

        /* Initial stacked state - poker hand style */
        .card-left {
          transform: translateX(-15%) rotate(-12deg) translateY(10px);
          z-index: 1;
        }

        .card-middle {
          transform: translateX(0%) rotate(0deg) translateY(0px);
          z-index: 2;
        }

        .card-right {
          transform: translateX(15%) rotate(12deg) translateY(10px);
          z-index: 1;
        }

        /* Hover state - fan out */
        .group\/container:hover .card-left {
          transform: translateX(-140%) rotate(-8deg) translateY(-15px);
          z-index: 3;
        }

        .group\/container:hover .card-middle {
          transform: translateX(0%) rotate(0deg) translateY(-30px);
          z-index: 3;
        }

        .group\/container:hover .card-right {
          transform: translateX(140%) rotate(8deg) translateY(-15px);
          z-index: 3;
        }

        /* Individual card hover - lift effect */
        .card-base:hover {
          transform: translateY(-50px) scale(1.08) rotate(0deg) !important;
          z-index: 10 !important;
        }

        .card-base:hover .glass-container {
          box-shadow:
            0 30px 80px rgba(168, 85, 247, 0.4),
            0 8px 32px 0 rgba(0, 0, 0, 0.15),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.2) !important;
          border-color: rgba(168, 85, 247, 0.5) !important;
        }

        /* Subtle glow effect */
        .card-base .glass-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .card-base:hover .glass-container::before {
          opacity: 1;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .group\/container:hover .card-left {
            transform: translateX(-110%) rotate(-5deg) translateY(-10px);
          }

          .group\/container:hover .card-middle {
            transform: translateX(0%) rotate(0deg) translateY(-20px);
          }

          .group\/container:hover .card-right {
            transform: translateX(110%) rotate(5deg) translateY(-10px);
          }

          .card-base:hover {
            transform: translateY(-30px) scale(1.05) rotate(0deg) !important;
          }
        }
      `}</style>
    </div>
  );
}
