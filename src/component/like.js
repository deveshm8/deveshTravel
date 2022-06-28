import React, { useState } from "react";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import "./like.css";
const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const Button = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button id="like" onClick={Button}>
      {isLiked ? <AiTwotoneLike /> : <AiOutlineLike />}
    </button>
  );
};

export default LikeButton;
