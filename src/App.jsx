import "./App.css";

function App() {
  return (
    <>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>React + Vite Test</h1>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
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
    </>
  );
}

export default App;
