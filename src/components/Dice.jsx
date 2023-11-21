import { useState } from "react";
import diceEmptyImg from "../assets/images/dice-empty.png";
import diceOneImg from "../assets/images/dice1.png";
import diceTwoImg from "../assets/images/dice2.png";
import diceThreeImg from "../assets/images/dice3.png";
import diceFourImg from "../assets/images/dice4.png";
import diceFiveImg from "../assets/images/dice5.png";
import diceSixImg from "../assets/images/dice6.png";

function Dice() {
  const [diceNumber, setDiceNumber] = useState(diceOneImg);

  const dice = [
    diceOneImg,
    diceTwoImg,
    diceThreeImg,
    diceFourImg,
    diceFiveImg,
    diceSixImg,
  ];

  const handleRollDice = () => {
    console.log("Rolling");

    setDiceNumber(diceEmptyImg);

    setTimeout(function rolling() {
      const randomIndex = Math.floor(Math.random() * dice.length);
      setDiceNumber(dice[randomIndex]);
    }, 1000);
  };
  return (
    <div>
      <img src={diceNumber} alt="" width={100} onClick={handleRollDice} />
    </div>
  );
}

export default Dice;
