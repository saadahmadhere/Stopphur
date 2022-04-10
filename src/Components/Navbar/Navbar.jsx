import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex">
        <Link to="/">
          <div className="logo">
            <div className=" logo_text txt_semibold">stopphur</div>
          </div>
        </Link>

        <ul className="navbar_links flex list_style_none">
          <li className="ml_8">
            <i className="fas fa-moon fa-2x"></i>
          </li>
          <li className="ml_8">
            <Link to="/login">
              <i className="fas fa-user fa-2x"></i>
            </Link>
          </li>
        </ul>
        <div className="navbar_burger flex">
          <i className="fas fa-bars fa-lg"></i>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
