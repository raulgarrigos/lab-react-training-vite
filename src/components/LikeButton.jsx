import { useState } from "react";

function LikeButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [increaseLikes, setIncreaseLikes] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);

  const handleIncrease = () => {
    console.log("Clickando");
    setIncreaseLikes(increaseLikes + 1);

    if (currentColor < colors.length - 1) {
      setCurrentColor(currentColor + 1);
    } else {
      setCurrentColor(0);
    }
  };

  const buttonStyles = {
    backgroundColor: colors[currentColor],
  };

  return (
    <div>
      <button style={buttonStyles} onClick={handleIncrease}>
        {increaseLikes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
