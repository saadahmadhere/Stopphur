import { useContext, createContext, useState } from "react";

const TaskContext = createContext([]);

const useTasks = () => useContext(TaskContext);

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TasksProvider, useTasks };
