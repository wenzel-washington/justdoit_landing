import Glass from './Glass';

export default function GlassHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Glass blur={10} opacity={0.1} borderRadius={16}>
          <div className="flex justify-center py-2">
            <h1
              className="text-3xl font-bold text-white tracking-tight"
              style={{
                textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
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
