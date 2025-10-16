import GlassSurface from './GlassSurface';

export default function GlassHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={16}
          brightness={50}
          opacity={0.85}
          blur={10}
          backgroundOpacity={0.1}
          saturation={1.2}
        >
          <h1 className="text-2xl font-bold text-white tracking-tight py-2">
            JustBuild.it
          </h1>
        </GlassSurface>
      </div>
    </header>
  );
}
