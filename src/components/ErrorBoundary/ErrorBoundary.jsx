import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    console.error("에러났어요", error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
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
            {`알 수 없는 에러가 발생했습니다. :()`}
          </h1>
          <Button variant="destructive" size="sm" asChild>
            <Link to={"/"}>홈으로 가기</Link>
          </Button>
        </article>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
