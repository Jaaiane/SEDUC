"use client";
import "./styles/styles.css";
import React, { useState } from "react";
// import Navbar from "./components/Navbar/Navbar";
import Header from "./components/teste/Teste";
import Pesquisa from "./components/Barra de Pesquisa/Pesquisa";
import ImageGallery from "./components/Galeria/ImageGallery";
import InfoCards from "./components/Cards/InfoCard";
import Footer from "./components/Footer/Footer";

export default function Home() {
  // const [showDropdown, setShowDropdown] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowDropdown(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowDropdown(false);
  // };

  return (
    <main>
      < Header />
      {/* <Navbar /> */}
      <Pesquisa />
      < ImageGallery />
      < InfoCards />
      <Footer />

      {/* <nav>
        <ul>
          <li 
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <a href="#">Opções</a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><a href="#">Opção 1</a></li>
                <li><a href="#">Opção 2</a></li>
                <li><a href="#">Opção 3</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav> */}
    </main>
  );
}
