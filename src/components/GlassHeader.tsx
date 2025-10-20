import Glass from './Glass';

export default function GlassHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Glass blur={10} opacity={0.1} borderRadius={16}>
          <div className="flex justify-center py-2">
            <img
              src="https://i.imgur.com/v1sZfwp.png"
              alt="JustBuild.it"
              className="h-auto w-auto"
            />
          </div>
        </Glass>
      </div>
    </header>
  );
}
