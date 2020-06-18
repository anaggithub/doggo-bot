import React from "react";
import Lottie from "react-lottie";
import dogAnimation from "../../data/dog.json";
import catAnimation from "../../data/cat.json";

const Pet = (props) => {
  const { classes, history, animation, handleOnClick } = props;

  const animationData = () => {
    if (animation) return animation;
    else if (props.pet === "dog") {
      return dogAnimation;
    } else return catAnimation;
  };

  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationData(),
  };

  return (
    <div history={history} className={`${classes}`} onClick={handleOnClick}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Pet;
