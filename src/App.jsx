import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Tasks, Home, Error, Pomodoro } from "./Screens";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/pomodoro/:id" element={<Pomodoro />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
