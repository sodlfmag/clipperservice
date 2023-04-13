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
import ScrollToTop from "./components/ScrollToTop";
import getPortfolios from "./components/SamplePortfolio";

function App() {
  const portfolios = [...getPortfolios()].reverse();

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />

        {/*포트폴리오, 갤러리 상세 LINK 시 ScrollToTop 적용 위해 별도 Routes 생성*/}
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/gallerypage" element={<GalleryPage />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={<Portfolio portfolios={portfolios} />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/requestpage" element={<RequestPage />} />
          <Route path="/admineditor" element={<AdminEditor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
