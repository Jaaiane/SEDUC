import React from 'react';
import '../Footer/Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="contact-info">
                    <p>Rua João Teixeira, N 135 | Centro - São Lourenço da Mata - PE | CEP: 54.735-320</p>
                    <p>Prefeitura de São Lourenço da Mata | CNPJ: 11.251.832/0001-05</p>
                    <p>Site: <a href="http://saolourencodamata.pe.gov.br/">saolourencodamata.pe.gov.br</a></p>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com" className="social-icon" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com" className="social-icon" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" className="social-icon" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
