import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/pages/NotFound";

const pages = import.meta.glob("/src/pages/**/*.jsx", { eager: true });

export const routes = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\/src\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  const pageComponent = pages[path].default;
  if (!pageComponent) {
    console.error(`이 경로 '${path}'의 컴포넌트를 찾을 수 없음.`);
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

if (routes.length === 0) {
  throw new Error("NO ROUTES FOUND. 페이지 컴포넌트 경로 확인 요망.");
}

export const router = createBrowserRouter([
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
