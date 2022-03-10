import './App.css';
import { useState, useReducer } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // function increase() {
  //   setCount(count+1);
  // }
  // function reset() {
  //   setCount(0);
  // }
  // function decrease() {
  //   setCount(count-1);
  // }
  function reducerCount(oldCount, action) {
    console.log(oldCount, action);
    let newCount;
    if(action === "올려주세요") {
      newCount = oldCount + 1;
    } else if(action === "초기화해주세요") {
      newCount = 0;
    } else if(action === "내려주세요") {
      newCount = oldCount - 1;
    }
    return newCount;
  }
  const initCount = 0;
  const [count, dispatchCount ] = useReducer(reducerCount, initCount);

  function increase() {
    const action = "올려주세요";
    dispatchCount(action);
  }
  function reset() {
    dispatchCount("초기화해주세요");
  }
  function decrease() {
    dispatchCount("내려주세요");
  }
  return (
      <div>
        <h1>Counter</h1>
        <input type="button" value="+" onClick={increase}></input>
        <input type="button" value="0" onClick={reset}></input>
        <input type="button" value="-" onClick={decrease}></input>
        <div>{count}</div>
      </div>
  );
}
export default App;
