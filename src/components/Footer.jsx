import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__container">
            {/* Información básica */}
            <div className="footer__info">
            <h3>UrbanStay</h3>
            <p>
                Plataforma de reservas de alojamientos urbanos y rurales.
            </p>
            </div>

            {/* Enlaces legales / informativos */}
            <nav className="footer__nav">
            <ul>
                <li><Link to="/aviso-legal">Aviso legal</Link></li>
                <li><Link to="/politica-privacidad">Política de privacidad</Link></li>
                <li><Link to="/terminos-servicio ">Términos del Servicio</Link></li>
            </ul>
            </nav>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
            <p>© 2026 UrbanStay · Proyecto de Enrique</p>
        </div>
        </footer>
    );
};

export default Footer;
