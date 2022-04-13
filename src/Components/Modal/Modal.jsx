import { useState } from "react";
import "./Modal.css";
import { useTasks } from "../../Contexts";
import { v4 as uuid } from "uuid";

const Modal = ({ setShowModal, showModal }) => {
  const { setTasks } = useTasks();

  const [modalValue, setModalValue] = useState({
    title: "",
    description: "",
    time: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, { _id: uuid(), ...modalValue }]);
    return setShowModal(false);
  };

  return (
    <div className={`modal_container ${showModal && "modal_active"}`}>
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
              onChange={(e) =>
                setModalValue((prev) => ({ ...prev, title: e.target.value }))
              }
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
                setModalValue((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              required></textarea>
          </label>
          <label>
            Time
            <input
              type="number"
              className="block mb_2"
              placeholder="Set the time"
              value={modalValue.time}
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
              onClick={(e) => {
                e.preventDefault();
                return setShowModal(false);
              }}>
              Close
            </button>
            <button className="btn btn_primary px_5 py_2 ml_1" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Modal };
