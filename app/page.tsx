"use client";
import "./styles/styles.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Pesquisa from "./components/Barra de Pesquisa/Pesquisa";
import ImageGallery from "./components/Galeria/ImageGallery";
import InfoCards from "./components/Cards/InfoCard";
import Footer from "./components/Footer/Footer";


export default function Home() {

  return (
    <main>
      < Navbar />
      <Pesquisa />
      < ImageGallery />
      < InfoCards />
      <Footer />
    </main>
  );
}
