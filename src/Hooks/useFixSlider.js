import { useEffect } from "react";

const useFixSlider = (freezeBackground) => {
  useEffect(() => {
    freezeBackground
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });
};

export { useFixSlider };
