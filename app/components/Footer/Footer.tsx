import { FC } from "react";
import { SlEnvolope, SlLocationPin, SlPhone } from "react-icons/sl";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import "../Footer/Footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src="/image/logo.png" alt="Logo" />
      </div>

      <div className="footer-center">
        <h2>Contato</h2>

        <div>
          <i className="pin">
            <SlLocationPin />
          </i>

          <span>
            Rua João Teixeira, Nº 135 | Centro São Lourenço da Mata - PE CEP:
            54.735-320
          </span>
        </div>

        <div>
          <i className="phone">
            <SlPhone />
          </i>
          <p>(81) 3299-0300</p>
        </div>

        <div>
          <i className="envelope">
            <SlEnvolope />
          </i>
          <p>
            <a href="mailto:educacao@slm.pe.gov.br">educacao@slm.pe.gov.br</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>mídias sociais</span>
        </p>

        <div className="footer-icons">
          <a href="#"><i className="social-icon"><AiOutlineInstagram /></i></a>
          <a href="#"><i className="social-icon"><AiOutlineYoutube /></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
