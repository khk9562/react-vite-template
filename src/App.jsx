import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

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
      <article className="box">
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
      </article>

      <article className="box">
        <h2>useReducer test</h2>
        <form>
          <input type="button" value="-" onClick={down} />
          <input type="button" value="0" onClick={reset} />
          <input type="button" value="+" onClick={up} />
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
