import React from "react";
import "../Galeria/ImageGallery.css"; 

const ImageGallery: React.FC = () => {
  return (
    <div className="conteiner">
      <div className="container1">
        <img
          src="/image/criança.png"
          alt="Criança alfabetizada"
          className="alfabetizada"
        />
      </div>
      <div className="container2">
        <img src="/image/ano letivo.png" alt="Ano letivo" className="anoLetivo" />
      </div>
      <div className="container3">
        <img src="/image/avaliação.png" alt="Avaliação" className="avaliacao" />
      </div>
      <div className="container4">
        <img src="/image/plemus.png" alt="PLEMUS" className="plemus" />
        <h3 className="text-galeria">
          PLATAFORMA DA EDUCAÇÃO DO MUNICÍPIO DE SÃO LOURENÇO DA MATA - PLEMUS
        </h3>
      </div>
    </div>
    
  );
};

export default ImageGallery;
