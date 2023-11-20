function DriverCard(props) {
  const roundedValue = Math.ceil(props.rating);

  let stars;

  if (roundedValue >= 0 && roundedValue < 1) {
    stars = "☆☆☆☆☆";
  } else if (roundedValue >= 1 && roundedValue < 2) {
    stars = "★☆☆☆☆";
  } else if (roundedValue >= 2 && roundedValue < 3) {
    stars = "★★☆☆☆";
  } else if (roundedValue >= 3 && roundedValue < 4) {
    stars = "★★★☆☆";
  } else if (roundedValue >= 4 && roundedValue < 5) {
    stars = "★★★★☆";
  } else if (roundedValue === 5) {
    stars = "★★★★★";
  }

  const divStyle = {
    margin: "10px",
    backgroundColor: "#425cbb",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
  };

  return (
    <div style={divStyle}>
      <img src={props.img} alt={props.name} width={100} />
      <h4>{props.name}</h4>
      <p>{stars}</p>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
