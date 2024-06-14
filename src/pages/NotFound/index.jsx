import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        404 NOT FOUND
      </h1>
      <Button variant="destructive" size="sm" asChild>
        <Link to={"/"}>홈으로 가기</Link>
      </Button>
    </article>
  );
};

export default NotFound;
