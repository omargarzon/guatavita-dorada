import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Atractivos from './pages/Atractivos';
import ElTraslado from './pages/ElTraslado';
import Entrevistas from './pages/Entrevistas';
import QuienesSomos from './pages/QuienesSomos';
import GuatavitaVieja from './pages/GuatavitaVieja';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atractivos" element={<Atractivos />} />
        <Route path="/el-traslado" element={<ElTraslado />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/guatavita-vieja" element={<GuatavitaVieja />} />
      </Routes>
    </BrowserRouter>
  );
}
