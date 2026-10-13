import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-brand"><span>brote.</span><p>Un poquito más de verde, todos los días.</p></div>
      <nav aria-label="Redes sociales"><ul className="nav-list"><li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li><li><a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">Contacto</a></li><li><Link to="/">Tienda</Link></li></ul></nav>
      <small>© 2026 Brote · Hecho con cariño y tierra.</small>
    </footer>
  );
};
