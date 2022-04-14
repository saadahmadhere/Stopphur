import { useEffect, useState } from "react";
import "./Modal.css";
import { useTasks } from "../../Contexts";
import { v4 as uuid } from "uuid";

const Modal = ({
  showModal,
  setShowModal,
  taskToBeEdited,
  isGettingEdited,
  setIsGettingEdited,
}) => {
  const { setTasks } = useTasks();
  const [error, setError] = useState("");
  const [modalValue, setModalValue] = useState({
    title: "",
    description: "",
    time: "",
  });

  const modalCloseHandler = (e) => {
    e.preventDefault();
    if (isGettingEdited) {
      setIsGettingEdited(false);
    } else {
      setShowModal(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isStringFilled = /^(?!\s*$).+/;
    const titleNotEmpty = isStringFilled.test(modalValue.title);
    const descriptionNotEmpty = isStringFilled.test(modalValue.description);

    if (!titleNotEmpty) {
      setError("Please provide a valid title");
    } else if (!descriptionNotEmpty) {
      setError("Please provide a valid description");
    } else {
      if (isGettingEdited) {
        setTasks((prev) =>
          prev.map((task) => {
            return task.id === taskToBeEdited.id
              ? { ...modalValue, id: task.id }
              : task;
          })
        );
        setIsGettingEdited(false);
      } else {
        setShowModal(false);
        setTasks((prev) => [...prev, { id: uuid(), ...modalValue }]);
      }
    }
  };

  useEffect(() => {
    if (taskToBeEdited) {
      const { title, description, time } = taskToBeEdited;
      setModalValue({ title, description, time });
    }
  }, [taskToBeEdited]);

  return (
    <div
      className={`modal_container ${
        (showModal || isGettingEdited) && "modal_active"
      }`}>
      <div className="modal">
        <form onSubmit={submitHandler}>
          <label>
            Title
            <input
              type="text"
              className="block mb_2"
              placeholder="Add Title"
              style={{ width: "100%" }}
              value={modalValue.title}
              onChange={(e) => {
                setError("");
                return setModalValue((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
              autoFocus
              required
            />
          </label>
          <label>
            Description
            <textarea
              cols="30"
              rows="10"
              placeholder="Add Description"
              className="block mb_2"
              value={modalValue.description}
              onChange={(e) =>
                setModalValue((prev) => {
                  setError("");
                  return {
                    ...prev,
                    description: e.target.value,
                  };
                })
              }
              required></textarea>
          </label>
          <label>
            Time
            <input
              type="number"
              className="block mb_2"
              placeholder="Set the time between 1 to 60 min"
              value={modalValue.time}
              min="1"
              max="60"
              onChange={(e) =>
                setModalValue((prev) => ({
                  ...prev,
                  time: Number(e.target.value),
                }))
              }
              required
            />
          </label>
          <div className="action_buttons ">
            <button
              className="btn btn_outline px_3 py_1"
              onClick={modalCloseHandler}>
              Close
            </button>
            <button className="btn btn_primary px_5 py_2 ml_1" type="submit">
              {isGettingEdited ? "Update" : "Add"}
            </button>
          </div>
          <h6 className="h6 mt_4 txt_center" style={{ color: "red" }}>
            {error}
          </h6>
        </form>
      </div>
    </div>
  );
};

export { Modal };
