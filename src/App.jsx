// import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import NotFound from "./pages/NotFound";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });
const routes = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  // 페이지 컴포넌트가 제대로 불러와졌는지 확인
  const pageComponent = pages[path].default;
  if (!pageComponent) {
    console.error(
      `Component for path ${path} is not found or not exported correctly.`
    );
    continue;
  }

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

console.log("routes", routes);

if (routes.length === 0) {
  throw new Error("No routes found. Check your page components and paths.");
}

const router = createBrowserRouter([
  ...routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  })),
  {
    path: "*",
    element: <NotFound />,
  },
]);
const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
