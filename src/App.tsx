import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LiquidEther from './components/LiquidEther';
import GlassHeader from './components/GlassHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative text-white">
        <div className="fixed inset-0 z-0 bg-[#0a0a1a]">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            autoResumeDelay={500}
            resolution={0.4}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <GlassHeader />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/imprint" element={<ImprintPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
