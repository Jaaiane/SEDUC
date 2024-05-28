import React from "react";
import "../Footer/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <p>
            Rua João Teixeira, N 135 | Centro - São Lourenço da Mata - PE | CEP:
            54.735-320
          </p>
          <p>Prefeitura de São Lourenço da Mata | CNPJ: 11.251.832/0001-05</p>
          <p>
            Site:{" "}
            <a href="http://saolourencodamata.pe.gov.br/">
              saolourencodamata.pe.gov.br
            </a>
          </p>
        </div>
        <div className="social-media">
          <a
            href="https://www.facebook.com"
            className="social-icon"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            className="social-icon"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.019888966922!2d-35.03994543849641!3d-7.996882581489314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab054d22a32d27%3A0x6a42c03ccc41aebb!2sR.%20Jo%C3%A3o%20Teixeira%2C%20135%20-%20Centro%2C%20S%C3%A3o%20Louren%C3%A7o%20da%20Mata%20-%20PE%2C%2054735-320!5e0!3m2!1spt-BR!2sbr!4v1716764161763!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
