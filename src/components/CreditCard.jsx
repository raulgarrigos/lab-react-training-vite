import visaImage from "../assets/images/visa.png";
import mastercardImage from "../assets/images/master-card.svg";

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

  if (props.type === "Visa") {
    return (
      <div style={cardStyles} className="creditCard">
        <img src={visaImage} alt={props.type} width={50} className="image" />
        <p className="number">{formattedNumber}</p>

        <div className="expireBank">
          <span className="expire">
            Expires {props.expirationMonth}/{props.expirationYear}
          </span>
          <span className="bank">{props.bank}</span>
        </div>

        <p className="owner">{props.owner}</p>
      </div>
    );
  } else {
    return (
      <div style={cardStyles} className="creditCard">
        <img
          src={mastercardImage}
          alt={props.type}
          width={35}
          className="image"
        />
        <p className="number">{formattedNumber}</p>

        <div className="expireBank">
          <span className="expire">
            Expires {props.expirationMonth}/{props.expirationYear}
          </span>
          <span className="bank">{props.bank}</span>
        </div>

        <p className="owner">{props.owner}</p>
      </div>
    );
  }
}

export default CreditCard;
