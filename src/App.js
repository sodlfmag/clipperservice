import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import RequsetPage from "./pages/RequestPage";
import "./css/App.css";
import MyHeader from "./components/MyHeader";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/requestpage" element={<RequsetPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
