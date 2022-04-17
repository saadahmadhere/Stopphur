import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Tasks, Home, Error, Pomodoro } from "./Screens";
import { useTheme } from "./Contexts";

const App = () => {
  const { darkTheme } = useTheme();
  return (
    <div className={`${darkTheme && "darkTheme"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/pomodoro/:id" element={<Pomodoro />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
