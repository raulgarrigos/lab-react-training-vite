import { useState } from "react";

function Carousel(props) {
  console.log(props);

  const [imageCarousel, setImageCarousel] = useState(0);

  const handleLeftCarousel = () => {
    let newImage = imageCarousel - 1;
    if (newImage < 0) {
      newImage = props.images.length - 1;
    }
    setImageCarousel(newImage);
  };

  const handleRightCarousel = () => {
    let newImage = imageCarousel + 1;
    if (newImage >= props.images.length) {
      newImage = 0;
    }
    setImageCarousel(newImage);
  };

  return (
    <div>
      <button onClick={handleLeftCarousel}>Left</button>
      <img src={props.images[imageCarousel]} alt="" />
      <button onClick={handleRightCarousel}>Right</button>
    </div>
  );
}

export default Carousel;
