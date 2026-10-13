import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" aria-label="Brote, inicio">
          <span className="brand-leaf" aria-hidden="true">✿</span>
          <span className="brand-name">brote<span>.</span></span>
        </Link>
        <small>plantas para vivir mejor</small>
      </div>
      <Nav />
    </header>
  );
};
