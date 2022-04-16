import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex">
        <Link to="/">
          <div className="logo">
            <h1 className="logo_text txt_semibold">stopphur</h1>
          </div>
        </Link>

        <ul className="navbar_links flex list_style_none">
          <li className="ml_8">
            <i className="fas fa-moon fa-xl"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
