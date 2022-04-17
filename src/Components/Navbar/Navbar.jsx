import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Contexts";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useTheme();
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
            <button
              className="btn"
              onClick={() => setDarkTheme((prev) => !prev)}>
              {darkTheme ? (
                <i className="fas fa-sun fa-xl"></i>
              ) : (
                <i className="fas fa-moon fa-xl"></i>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
