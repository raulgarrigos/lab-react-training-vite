function IdCard(props) {
  console.log(props);
  return (
    <div>
      <p>
        <strong>First Name: </strong>
        {props.firstName}{" "}
      </p>
      <p>
        <strong>Last Name: </strong>
        {props.lastName}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {props.height}
      </p>
      <p>
        <strong>Birth: </strong>
        {props.birth.toDateString()}
      </p>

      <br />
    </div>
  );
}

export default IdCard;
