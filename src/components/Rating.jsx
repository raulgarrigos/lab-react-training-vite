function Rating(props) {
  const roundedValue = Math.ceil(props.children);

  if (roundedValue >= 0 && roundedValue < 1) {
    return <div>☆☆☆☆☆</div>;
  } else if (roundedValue >= 1 && roundedValue < 2) {
    return <div>★☆☆☆☆</div>;
  } else if (roundedValue >= 2 && roundedValue < 3) {
    return <div>★★☆☆☆</div>;
  } else if (roundedValue >= 3 && roundedValue < 4) {
    return <div>★★★☆☆</div>;
  } else if (roundedValue >= 4 && roundedValue < 5) {
    return <div>★★★★☆</div>;
  } else if (roundedValue === 5) {
    return <div>★★★★★</div>;
  }
}

export default Rating;
