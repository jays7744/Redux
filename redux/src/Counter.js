import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux-1/Action";

const Counter = () => {
  const Slice = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment());
  };

  const sub = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={sub}>-</button>
      Counter Value:{" "}
      {Slice.CounterValue}
      <button onClick={add}>+</button>
    </div>
  );
};

export default Counter;
