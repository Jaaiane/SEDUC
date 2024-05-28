import React from "react";
import "../Cards/InfoCard.css"; // Supondo que você tenha CSS modules para estilos

const InfoCards: React.FC = () => {
  return (
    <div>
      <section className='info'>
        <h1 className='nome'>Informações</h1>
      </section>

        <section className='cardContainer'>
          <article className="card">
            <img
              src="/image/dash.png"
              alt="Dashboard Municipal"
              className='img'
            />
            <h3 className='text'>DASHBOARD MUNICIPAL</h3>
            <h4 className="text">(PAINEL DE INFORMAÇÕES)</h4>
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card'>
            <img
              src="/image/saepe.png"
              alt="Resultado do SAEPE 2023"
              className="img saep"
            />
            <h3 className='text'>RESULTADO DO SAEPE 2023</h3>
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card'>
            <img src="/image/ideb.png" alt="IDEB" className='img' />
            <h3 className='text'>IDEB</h3>
            <h4 className='text'>(DADOS DA REDE MUNICIPAL)</h4>
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card'>
            <img src="/image/saeb.png" alt="SAEBE" className='saebe' />
            <h3 className='text'>SAEBE</h3>
            <h4>RESULTADO DE PROFICIÊNCIA DO SAEB 2023</h4>
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card'>
            <img
              src="/image/painel contextual.png"
              alt="Painel Contextual"
              className='img'
            />
            <h3 className='text'>PAINEL CONTEXTUAL</h3>
            <h4 className="text">SAEPE 2022</h4>
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card'>
            <img
              src="/image/feedback.png"
              alt="Qual a sua opinião?"
              className='img'
            />
            <h3 className='text'>QUAL A SUA OPINIÃO?</h3>
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card'>
            <img
              src="/image/disseminação-resultados.jpeg"
              alt="Disseminação dos Resultados 2023"
              className='img'
            />
            <h3 className='text'>DISSEMINAÇÃO DOS RESULTADOS 2023</h3>
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card card1'>
            <img
              src="/image/criança.png"
              alt="Qual a sua opinião?"
              className='img'
            />
            <h3 className='text'>Programa Criança Alfabetizada</h3>
            
            <button className='btn'>ACESSAR</button>
          </article>

          <article className='card card2'>
            <img
              src="/image/avaliação.png"
              alt="Qual a sua opinião?"
              className='img'
            />
            <h3 className='text'>Avaliação de Fluência</h3>
            <button className='btn'>ACESSAR</button>
          </article>
          
        </section>
    </div>
    
  );
};

export default InfoCards;
