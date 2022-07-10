import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { counterAction } from "@/redux/slices/counter";

const HomePage = () => {
  const counterState = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>welcome to our page , published via GH-Actions</h1>
      {/* <img width={100} height={100} src="/images/lighthouse.jpg" alt="lighthouse" /> */}
      <h2>counter state</h2>
      <span aria-label="count">{counterState.value}</span>
      <br />
      <button aria-label="btnInc" onClick={() => dispatch(counterAction.increment())}>
        increase counter
      </button>
      <button aria-label="btnDec" onClick={() => dispatch(counterAction.decrement())}>
        decrease counter
      </button>
      <button aria-label="btnIncAmt" onClick={() => dispatch(counterAction.incrementByAmount(20))}>
        increase counter
      </button>
    </div>
  );
};

export default HomePage;
