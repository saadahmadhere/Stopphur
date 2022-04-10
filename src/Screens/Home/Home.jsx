import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="main_home px_2 py_2">
      <div className="home_text txt_center flex_col flex_align__center">
        <h1 className="h1">
          Stop procrastinating and start doing with <span>stopphur</span>
        </h1>
        <Link to="/tasks" className="btn btn_get__started px_6 py_3 btn_link">
          Get Started &rarr;
        </Link>
      </div>
      <div className="home_image">
        <img
          src="/images/stopphur home.svg"
          alt="clock"
          className="img_responsive"
        />
      </div>
    </main>
  );
};

export { Home };
