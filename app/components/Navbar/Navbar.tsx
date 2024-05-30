import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import { VscChevronDown } from "react-icons/vsc";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<string[]>([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdowns((prevState) =>
      prevState.includes(dropdown)
        ? prevState.filter((item) => item !== dropdown)
        : [...prevState, dropdown]
    );
  };

  useEffect(() => {
    if (menuOpen) {
      document.querySelector(".menu")!.classList.add("open");
    } else {
      document.querySelector(".menu")!.classList.remove("open");
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <nav className="menu">
          <div className="head">
            <button
              type="button"
              className="close-menu-btn"
              onClick={toggleMenu}
            >
            </button>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#">Plemus</a>
            </li>
            <li
              className={`dropdown ${
                activeDropdowns.includes("unidades") ? "active" : ""
              }`}
            >
              <a href="#" onClick={() => toggleDropdown("unidades")}>
                Unidades Escolares
              </a>
              <i onClick={() => toggleDropdown("unidades")}>
                <VscChevronDown />
              </i>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span>Rural</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Urbana</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`dropdown ${
                activeDropdowns.includes("programa") ? "active" : ""
              }`}
            >
              <a href="#" onClick={() => toggleDropdown("programa")}>
                Programa Criança Alfabetizada
              </a>
              <i onClick={() => toggleDropdown("programa")}>
                <VscChevronDown />
              </i>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span>Instrumental de Acompanhamento Pedagógico</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Material Complementar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Equipe</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Matemática 1° e 2° anos</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Avaliação de Fluência em Leitura</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`dropdown ${
                activeDropdowns.includes("departamento") ? "active" : ""
              }`}
            >
              <a href="#" onClick={() => toggleDropdown("departamento")}>
                Departamento Pedagógico
              </a>
              <i onClick={() => toggleDropdown("departamento")}>
                <VscChevronDown />
              </i>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span>2023</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Avaliando com Você 2023</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Disseminação dos Resultados de Proficiência do Saeb
                    </span>
                  </a>
                </li>
                <li
                  className={`dropdown ${
                    activeDropdowns.includes("2022") ? "active" : ""
                  }`}
                >
                  <a href="#">
                    <span>2022</span>
                  </a>
                  <i className="icon" onClick={() => toggleDropdown("2022")}>
                    <VscChevronDown />
                  </i>
                  <ul className="sub-menu sub-menu-right">
                    <li>
                      <a href="#">
                        <span>Menu Departamento Pedagógico</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>PEA</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Registro de Aula</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Calendário</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Projetos</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>EJA</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Eventos</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Pautas e Reuniões</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span>Disciplinas Diversificadas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Encontros</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Componentes Curriculares</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Orientações Metadológicas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Semana do Pau Brasil</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>OBMEP Mirim 2023</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>OBMEP 2023 - Anos Finais</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Equipe Técnica</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <button type="button" className="open-menu-btn" onClick={toggleMenu}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
        </div>
      </div>

      <img src="/image/seduc.jpeg" alt="" className="img-inicial" />
    </header>
  );
};

export default Navbar;
