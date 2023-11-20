function CreditCard(props) {
  const cardStyles = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  let maskedNumber = [];

  for (let i = 0; i < props.number.length; i++) {
    if (i < props.number.length - 4) {
      maskedNumber.push("*");
    } else {
      maskedNumber.push(props.number[i]);
    }
  }

  const formattedNumber = maskedNumber.join("");

  return (
    <div style={cardStyles}>
      <p className="type">{props.type}</p>
      <p className="number">{formattedNumber}</p>
      <p className="expire">
        Expires {props.expirationMonth}/{props.expirationYear}
      </p>
      <p className="bank">{props.bank}</p>
      <p className="owner">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
