import { useTasks } from "../../Contexts";

const SingleTask = ({ title, id }) => {
  const { setTasks } = useTasks();

  const deleteTaskHandler = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  return (
    <div className="task flex px_5 py_2 mb_4">
      <h4 className="h4">{title}</h4>
      <div className="task_buttons flex ">
        <button className="btn btn_edit__task ml_2">
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
