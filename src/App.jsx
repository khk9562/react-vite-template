import "./App.css";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { router } from "./api/router";

const App = () => {
  return (
    <ErrorBoundary>
      <div className="container-fluid" style={{ padding: "0" }}>
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
};

export default App;
