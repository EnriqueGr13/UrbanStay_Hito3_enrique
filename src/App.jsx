import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"


import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Favoritos from "./pages/Favoritos.jsx";

function App() {
  const [favoritos, setFavoritos] = useState([]);

    const toggleFavorito = (id) => {
      setFavoritos((prev) =>
        prev.includes(id)
          ? prev.filter((fav) => fav !== id)
          : [...prev, id]
      );
    };

  return (
    <>
      <Header favoritos={favoritos}/>

      <Routes>
        <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito}/>} />
        <Route path="/producto/:id" element={<ProductDetail favoritos={favoritos} toggleFavorito={toggleFavorito}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favoritos" element={<Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
