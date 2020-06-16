import React from "react";
import Lottie from "react-lottie";

const Pet = ({ classes, history, animation }) => {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animation,
  };

  function handleOnClick() {
    history.push("/chat");
  }

  return (
    <div
      history={history}
      className={`dog-container ${classes}`}
      onClick={handleOnClick}
    >
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Pet;
