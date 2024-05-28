import React from 'react';
import '../Barra de Pesquisa/Pesquisa.css'; // Supondo que você tenha CSS modules para estilos
import { CiSearch } from "react-icons/ci";

const Pesquisa: React.FC = () => {
  return (
    <section className='source'>
      <section className='pesquisa'>
        <div className='search'>
          <label htmlFor="searchInput">
          <i className='icon'>
            <CiSearch />
          </i>
          </label>
          <input type="text" id="searchInput" placeholder="Digite aqui" />
        </div>
      </section>
    </section>
  );
};

export default Pesquisa;
