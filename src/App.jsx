import { useState } from "react";
import "./App.css";
import { useReducer } from "react";
import { Button } from "./components/ui/button";

function App() {
  const countReducer = (oldCount, action) => {
    switch (action.type) {
      case "UP":
        return oldCount + action.num;
      case "DOWN":
        return oldCount - action.num;
      case "RESET":
        return 0;
      default:
        return oldCount;
    }
  };
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [num, setNum] = useState(1);

  const down = () => {
    // setCount(count - 1);
    countDispatch({ type: "DOWN", num: num });
  };

  const reset = () => {
    // setCount(0);
    // countDispatch("RESET");
    countDispatch({ type: "RESET", num: num });
  };

  const up = () => {
    // setCount(count + 1);
    // countDispatch("UP");
    countDispatch({ type: "UP", num: num });
  };

  return (
    <>
      {/* <article className="box">
        <h1>React + Vite Test</h1>

        <form
          className="box"
          onSubmit={(event) => {
            event.preventDefault();
            console.log("submit", event);
            console.log("title", event.target.title.value);
            console.log("body", event.target.body.value);
          }}
        >
          <input type="text" name="title" placeholder="title" />
          <textarea name="body" placeholder="body" />

          <input type="submit" value="제출" />
        </form>
      </article> */}

      <article className="box">
        <h2>useReducer test</h2>
        <form>
          <Button onClick={down}>-</Button>
          <Button onClick={reset}>0</Button>
          <Button onClick={up}>+</Button>
          <input
            type="text"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
        </form>
        <span>{count}</span>
      </article>
    </>
  );
}

export default App;
