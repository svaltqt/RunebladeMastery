import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route index element={<Home />} />
          <Route path="addons" element={<Addons />} />
          <Route path="weakauras" element={<WeakAuras />} />
          <Route path="macros" element={<Macros />} />
          <Route path="talentos" element={<Talentos />} />
          <Route path="gear" element={<Gear />} />
          <Route path="ui" element={<UI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
