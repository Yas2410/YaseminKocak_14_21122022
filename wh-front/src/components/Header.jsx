import { Link } from "react-router-dom";
import logo from "../assets/wh-logo.png";
// Style
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <Link className="header-link" to="/">
        <img className="header-logo" src={logo} alt="Wealth Health Logo" />
        <h1 className="header-text">WEALTH HEALTH</h1>
      </Link>
    </header>
  );
}

export default Header;
