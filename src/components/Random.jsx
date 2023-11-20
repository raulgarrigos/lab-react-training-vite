function Random(props) {
  const result = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div>
      Random value between {props.min} and {props.max} {"=>"} {result}
    </div>
  );
}

export default Random;
