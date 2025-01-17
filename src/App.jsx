import "./App.css";
import BoxColor from "./components/BoxColor";
import ClickablePicture from "./components/ClickablePicture";
import CreditCard from "./components/CreditCard";
import Dice from "./components/Dice";
import DriverCard from "./components/DriverCard";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import LikeButton from "./components/LikeButton";
import Random from "./components/Random";
import Rating from "./components/Rating";
import Carousel from "./components/Carousel";

import catImage from "./assets/images/cat.jpg";
import catGlasses from "./assets/images/cat-glasses.jpg";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      {/* // Iteration 1 */}
      <h2>IdCard</h2>

      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* // Iteration 2 */}
      <h2>Greetings</h2>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* // Iteration 3 */}
      <h2>Random</h2>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* // Iteration 4 */}
      <h2>BoxColor</h2>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* // Iteration 5 */}
      <h2>CreditCard</h2>

      <CreditCard
        type={"Visa"}
        number={"0123456789018845"}
        expirationMonth={3}
        expirationYear={2021}
        bank={"BNP"}
        owner={"Maxence Bouret"}
        bgColor={"#11aa99"}
        color={"white"}
      />

      <CreditCard
        type={"Master Card"}
        number={"0123456789010995"}
        expirationMonth={3}
        expirationYear={2021}
        bank={"N26"}
        owner={"Maxence Bouret"}
        bgColor={"#eeeeee"}
        color={"#222222"}
      />

      <CreditCard
        type={"Visa"}
        number={"0123456789016984"}
        expirationMonth={12}
        expirationYear={2019}
        bank={"BBVA"}
        owner={"Maxence Bouret"}
        bgColor={"#ddbb55"}
        color={"white"}
      />

      {/* // Iteration 6 */}
      <h2>Rating</h2>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* // Iteration 7 */}
      <h2>DriverCard</h2>

      <DriverCard
        name="Travis Kalanick"
        rating={4}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />

      {/* // Iteration 8 */}
      <h2>Like Button</h2>
      <LikeButton />

      {/* // Iteration 9 */}
      <h2>Clickable Image</h2>
      <ClickablePicture img={catImage} imgClicked={catGlasses} />

      {/* // Iteration 10 */}
      <h2>Dice</h2>
      <Dice />

      {/* // Iteration 11 */}
      <h2>Carousel</h2>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
    </div>
  );
}

export default App;
