import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomeOfComponents";
import Instagram from "./Components/Instagram";
import GitHub from "./Components/GitHub";
import LinkedIn from "./Components/LinkedIn";
import WhatsApp from "./Components/WhatsApp";





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Home />} />
      <Route path="/MyPortfolio" element={<Home />} />
      <Route path="/Port" element={<Home />} />
      <Route path="/Instagram" element={<Instagram />} />
      <Route path="/Whatsapp" element={<WhatsApp />} />
      <Route path="/LinkedIn" element={<LinkedIn/>} />
      <Route path="/GitHub" element={<GitHub />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
