const formatTime = (remainingTime) => {
  const mins = Math.floor(remainingTime / 60);
  const secs = remainingTime % 60;

  let _time = (mins < 10 ? "0" : "") + "" + mins + ":" + (secs < 10 ? "0" : "");
  _time += "" + secs;

  return _time;
};

export { formatTime };
