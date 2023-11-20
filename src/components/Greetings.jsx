function Greetings(props) {
  if (props.lang === "en") {
    return <div className="greetings">Hello {props.children}</div>;
  } else if (props.lang === "fr") {
    return <div className="greetings">Bonjour {props.children}</div>;
  } else if (props.lang === "de") {
    return <div className="greetings">Hallo {props.children}</div>;
  } else if (props.lang === "es") {
    return <div className="greetings">Hola {props.children}</div>;
  }
}

export default Greetings;
