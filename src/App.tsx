import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Addons from './pages/Addons';
import WeakAuras from './pages/WeakAuras';
import Macros from './pages/Macros';
import Talentos from './pages/Talentos';
import Gear from './pages/Gear';
import UI from './pages/UI';

function App() {
  return (
    <BrowserRouter basename="/RunebladeMastery">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect root to default class */}
          <Route index element={<Navigate to="/class/death-knight/home" replace />} />

          {/* Class home - Spec selection page */}
          <Route path="class/:className/home" element={<Home />} />

          {/* Spec-based routes */}
          <Route path="class/:className/:spec/home" element={<Home />} />
          <Route path="class/:className/:spec/addons" element={<Addons />} />
          <Route path="class/:className/:spec/weakauras" element={<WeakAuras />} />
          <Route path="class/:className/:spec/macros" element={<Macros />} />
          <Route path="class/:className/:spec/talentos" element={<Talentos />} />
          <Route path="class/:className/:spec/gear" element={<Gear />} />
          <Route path="class/:className/:spec/ui" element={<UI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
