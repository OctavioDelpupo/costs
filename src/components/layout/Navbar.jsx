import { Link } from "react-router-dom";

import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Costs" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/company">Empresa</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
