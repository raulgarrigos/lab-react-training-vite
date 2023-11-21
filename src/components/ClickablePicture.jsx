import { useState } from "react";

function ClickablePicture(props) {
  const [imageState, setImageState] = useState(props.img);

  const handleClick = () => {
    console.log("Clickando");

    if (imageState === props.img) {
      setImageState(props.imgClicked);
    } else {
      setImageState(props.img);
    }
  };
  return (
    <div>
      <img src={imageState} alt="" onClick={handleClick} />
    </div>
  );
}

export default ClickablePicture;
