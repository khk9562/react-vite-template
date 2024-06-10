import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

function App() {
  const [count, setCount] = useState(0);

  const down = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const up = () => {
    setCount(count + 1);
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
        <h2>useState test</h2>
        <form>
          <input type="button" value="-" onClick={down} />
          <input type="button" value="0" onClick={reset} />
          <input type="button" value="+" onClick={up} />
        </form>
      </article>
    </>
  );
}

export default App;
