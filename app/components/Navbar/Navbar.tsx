import React, { useEffect, useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import "../Navbar/Navbar.css";

const Navbar: React.FC = () => {
  // const [showDropdown, setShowDropdown] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowDropdown(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowDropdown(false);
  // };

  // useEffect(() => {
  //   const hamburguer = document.querySelector(".menu-hamburguer");
  //   const navMenu = document.querySelector(".nav-menu");

  //   if (hamburguer && navMenu) {
  //     hamburguer.addEventListener("click", () => {
  //       hamburguer.classList.toggle("active");
  //       navMenu.classList.toggle("active");
  //     });
  //   }

  //   return () => {
  //     if (hamburguer && navMenu) {
  //       hamburguer.addEventListener("click", () => {
  //         hamburguer.classList.toggle("active");
  //         navMenu.classList.toggle("active");
  //       });
  //     }
  //   };

  return (
    <header className="navbar">
      <div className="container">
        <nav className="menu">

        <div className="head">
            <button type="button" className="close-menu-btn"></button>
          </div>

          <ul className="nav-menu">

            <li><a href="#">PLEMUS</a></li>

            <li className="dropdown">
              <a href="#">UNIDADES ESCOLARES</a>
              <i>
                <VscChevronDown />
              </i>
            </li>

            <li className="dropdown">
              <a href="#">PROGRAMA CRIANÇA ALFABETIZADA - PCA</a>
            </li>

            <li className="dropdown">
              <a href="#">DEPARTAMENTO PEDAGÓGICO</a>
            </li>

            <li><a href="#">EQUIPE TÉCNICA</a></li>

            <li><a href="#">FEEDBACK</a></li>

          </ul>

        </nav>
      </div>

      <img src="/image/seduc.jpeg" alt="" className="img-inicial" />
    </header>
  );
};

export default Navbar;
