import { LucideIcon } from 'lucide-react';
import Glass from './Glass';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group transition-all duration-300 hover:scale-[1.02]">
      <Glass blur={12} opacity={0.08} borderRadius={16}>
        <div className="p-6">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{description}</p>
          </div>
        </div>
      </Glass>
    </div>
  );
}
