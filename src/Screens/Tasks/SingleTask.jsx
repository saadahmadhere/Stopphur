import { useState } from "react";
import { useTasks } from "../../Contexts";
import { Modal } from "../../Components";

const SingleTask = ({ task }) => {
  const { setTasks } = useTasks();
  const { id, title } = task;
  const [isGettingEdited, setIsGettingEdited] = useState(false);

  const deleteTaskHandler = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task flex px_5 py_2 mb_4">
      {isGettingEdited && (
        <Modal
          taskToBeEdited={task}
          isGettingEdited={isGettingEdited}
          setIsGettingEdited={setIsGettingEdited}
        />
      )}

      <h4 className="h4">{title}</h4>
      <div className="task_buttons flex ">
        <button
          className="btn btn_edit__task ml_2"
          onClick={() => setIsGettingEdited(true)}>
          <i className="far fa-edit fa-lg"></i>
        </button>
        <button
          className="btn btn_delete__task ml_4"
          onClick={deleteTaskHandler}>
          <i className="far fa-trash-alt fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

export { SingleTask };
