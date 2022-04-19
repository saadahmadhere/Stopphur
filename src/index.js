import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { TasksProvider, ThemeProvider } from "./Contexts";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <Router>
      <TasksProvider>
        <App />
      </TasksProvider>
    </Router>
  </ThemeProvider>
);
