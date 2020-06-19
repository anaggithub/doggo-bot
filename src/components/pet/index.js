import React from "react";
import Lottie from "react-lottie";
import dogAnimation from "../../data/dog.json";
import catAnimation from "../../data/cat.json";
import { useSelector } from "react-redux";

const Pet = ({ classes, history, animation, handleOnClick }) => {
  const store = useSelector((state) => state);

  const animationData = () => {
    if (animation) return animation;
    else if (store.pet === "dog") {
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
