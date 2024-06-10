import "./App.css";
import { useReducer } from "react";

function App() {
  const countReducer = (oldCount, action) => {
    // if (action === "UP") {
    //   return oldCount + 1;
    // } else if (action === "DOWN") {
    //   return oldCount - 1;
    // } else if (action === "RESET") {
    //   return 0;
    // }

    switch (action) {
      case "UP":
        return oldCount + 1;
      case "DOWN":
        return oldCount - 1;
      case "RESET":
        return 0;
      default:
        return oldCount;
    }
  };
  const [count, countDispatch] = useReducer(countReducer, 0);

  const down = () => {
    // setCount(count - 1);
    countDispatch("DOWN");
  };

  const reset = () => {
    // setCount(0);
    countDispatch("RESET");
  };

  const up = () => {
    // setCount(count + 1);
    countDispatch("UP");
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
        </form>
        <span>{count}</span>
      </article>
    </>
  );
}

export default App;
