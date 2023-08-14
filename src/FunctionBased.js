import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

function FunctionBased() {
  const dispatch = useDispatch();
  const count = useSelector((reducers) => reducers.value);

  const incrementOnPress = () => {
    dispatch(increment());
  };

  const decrementOnPress = () => {
    dispatch(decrement());
  };

  return (
    <center>
      <h1>{count}</h1>
      <button style={{ marginRight: "10px" }} onClick={incrementOnPress}>
        increment
      </button>
      <button onClick={decrementOnPress}>decrement</button>
    </center>
  );
}

export default FunctionBased;
