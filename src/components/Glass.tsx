import { ReactNode, CSSProperties } from 'react';

interface GlassProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  blur?: number;
  opacity?: number;
  borderRadius?: number;
}

export default function Glass({
  children,
  className = '',
  style = {},
  blur = 12,
  opacity = 0.15,
  borderRadius = 16,
}: GlassProps) {
  const glassStyle: CSSProperties = {
    ...style,
    borderRadius: `${borderRadius}px`,
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: `blur(${blur}px) saturate(180%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
    border: '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.15),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)
    `,
  };

  return (
    <div className={`glass-container ${className}`} style={glassStyle}>
      {children}
    </div>
  );
}
