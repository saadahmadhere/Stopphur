import { useState } from "react";
import "./Tasks.css";
import { SingleTask } from "./SingleTask";
import { Modal } from "../../Components";
import { useFixSlider } from "../../Hooks";
import { useTasks } from "../../Contexts";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const { tasks } = useTasks();

  useFixSlider(showModal);

  return (
    <main className="tasks_bg__light">
      {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}
      <div className="main_tasks">
        <section className="tasks_welcome__text">
          <h1 className="h1">Welcome back, User</h1>
          <h3 className="h3">
            You have {tasks.length} task(s) remaining for the day!
          </h3>
        </section>
        <section className="tasks_todo py_10 px_12 mt_10">
          <div className="add_tasks">
            <h2 className="h2">Tasks Todo</h2>
            <button className="btn btn_todo" onClick={() => setShowModal(true)}>
              <i className="fas fa-plus-circle fa-3x "></i>
            </button>
          </div>
          <div className="tasks_list px_6 mt_8">
            {tasks.map((task) => (
              <SingleTask task={task} key={task.id} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export { Tasks };
