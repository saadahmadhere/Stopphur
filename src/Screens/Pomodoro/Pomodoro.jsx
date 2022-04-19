import { useState } from "react";
import { useParams } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTasks } from "../../Contexts";
import { usePageTitle } from "../../Hooks";
import { formatTime } from "../../utils/formatTime";
import "./Pomodoro.css";

const Pomodoro = () => {
  const { tasks } = useTasks();
  const { id: paraId } = useParams();
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { setTitle } = usePageTitle("Stopphur | Timer");

  const currentTask = tasks.filter((task) => task.id === paraId);
  const givenTime = currentTask[0].time;

  return (
    <main className="pomodoro_main ">
      <section className="timer_wrapper flex_col">
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          size={250}
          duration={60 * givenTime}
          colors={["#f9a826"]}
          onComplete={() => {
            setIsPlaying(false);
            setKey((prevKey) => prevKey + 1);
          }}
          onUpdate={(remainingTime) =>
            setTitle(`${formatTime(remainingTime)} | Timer`)
          }>
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              return <div className="timer">Time is up</div>;
            }

            return (
              <div className="timer">
                <div
                  className="value"
                  style={{
                    fontSize: "3rem",
                    color: "#f9a826",
                  }}>
                  {formatTime(remainingTime)}
                </div>
              </div>
            );
          }}
        </CountdownCircleTimer>

        <div className="button_wrapper">
          {
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="btn btn_outline px_3 py_1 inline">
              {isPlaying ? (
                <i className="fas fa-pause-circle mr_1"></i>
              ) : (
                <i className="fas fa-play mr_1"></i>
              )}
              {isPlaying ? "Pause" : "Play"}
            </button>
          }
          <button
            className="btn btn_primary px_3 py_1 inline "
            onClick={() => {
              setKey((prevKey) => prevKey + 1);
              setIsPlaying(false);
            }}>
            <i className="fas fa-redo mr_1"></i>
            Reset Timer
          </button>
        </div>
      </section>
      <section className="timer_details">
        <h2 className="h2">{currentTask[0].title}</h2>
        <p className="txt_regular ">{currentTask[0].description}</p>
      </section>
    </main>
  );
};

export { Pomodoro };
