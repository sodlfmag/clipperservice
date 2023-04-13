import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import RequestPage from "./pages/RequestPage";
import "./css/App.css";
import MyHeader from "./components/MyHeader";
import PortfolioPage from "./pages/PortfolioPage";
import GalleryPage from "./pages/GalleryPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminEditor from "./pages/AdminEditor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/requestpage" element={<RequestPage />} />
          <Route path="/gallerypage" element={<GalleryPage />} />
          <Route path="/admineditor" element={<AdminEditor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
