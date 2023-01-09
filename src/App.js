import "./App.css";

import Banner from "./components/Banner";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Js from "./pages/Js";
import Chakra from "./pages/Chakra";
import Tailwind from "./pages/Tailwind";
import Babel from "./pages/Babel";
import Calendly from "./pages/Calendly";
import Http from "./pages/Http";
import React from "./pages/React";
import Context from "./pages/Context";
import Hook from "./pages/Hook";
import Next from "./pages/Next";
import Express from "./pages/Express";
import Node from "./pages/Node";
import Typescript from "./pages/Typescript";
import Three from "./pages/Three";
import Strapi from "./pages/Strapi";
import Notion from "./pages/Notion";
import NotFound from "./pages/NotFound";
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
        <Route path="article" element={<Article />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="js" element={<Js />} />
        <Route path="chakra" element={<Chakra />} />
        <Route path="tailwind" element={<Tailwind />} />
        <Route path="babel" element={<Babel />} />
        <Route path="calendly" element={<Calendly />} />
        <Route path="react" element={<React />} />
        <Route path="context" element={<Context />} />
        <Route path="hook" element={<Hook />} />
        <Route path="http" element={<Http />} />
        <Route path="next" element={<Next />} />
        <Route path="express" element={<Express />} />
        <Route path="node" element={<Node />} />
        <Route path="typescript" element={<Typescript />} />
        <Route path="three" element={<Three />} />
        <Route path="strapi" element={<Strapi />} />
        <Route path="notion" element={<Notion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
