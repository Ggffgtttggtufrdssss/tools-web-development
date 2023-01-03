import "./App.css";

import Banner from "./components/Banner";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Js from "./pages/Js";
import Chakra from "./pages/Chakra";
import Tailwind from "./pages/Tailwind";
import Babel from "./pages/Babel";
import Calendly from "./pages/Calendly";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route index element={<Accueil />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="js" element={<Js />} />
        <Route path="chakra" element={<Chakra />} />
        <Route path="tailwind" element={<Tailwind />} />
        <Route path="babel" element={<Babel />} />
        <Route path="calendly" element={<Calendly />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
