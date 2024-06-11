import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <article className="box">
      <h2>404 NOT FOUND</h2>
      <Link to={"/"}>홈으로 가기</Link>
    </article>
  );
};

export default NotFound;
