import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import BurstPipes from "./pages/BurstPipes";
import LeakDetection from "./pages/LeakDetection";
import BlockedDrains from "./pages/BlockedDrains";
import GeyserServices from "./pages/GeyserServices";
import Services from "./pages/Services";
import WaterDelivery from "./pages/WaterDelivery";
import HPJetting from "./pages/HPJetting";
import Location from "./pages/Location";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="plumber-in/:city" element={<Location />} />
          <Route path="services">
            <Route index element={<Services />} />
            <Route path="burst-pipes" element={<BurstPipes />} />
            <Route path="leak-detection" element={<LeakDetection />} />
            <Route path="blocked-drains" element={<BlockedDrains />} />
            <Route path="geyser-services" element={<GeyserServices />} />
            <Route path="water-delivery" element={<WaterDelivery />} />
            <Route path="hp-jetting" element={<HPJetting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
