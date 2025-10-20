import Glass from './Glass';

export default function GlassHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Glass blur={10} opacity={0.1} borderRadius={16}>
          <div className="flex justify-center">
            <div className="flex items-center gap-3 py-2">
              <img
                src="https://i.imgur.com/AOXVyeE.png"
                alt="JustBuild.it Logo"
                className="h-8 w-8"
              />
              <h1 className="text-2xl font-bold text-white tracking-tight">
                JustBuild.it
              </h1>
            </div>
          </div>
        </Glass>
      </div>
    </header>
  );
}
