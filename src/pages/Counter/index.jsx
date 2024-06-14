import useStore from "@/stores/count";
import { Button } from "react-bootstrap";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/layouts/Header/Header";

const Counter = () => {
  const { count, num, setNum, up, down, reset } = useStore();

  return (
    <>
      <Header title="카운터" />
      <article className="box" style={{ gap: "14px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>COUNTER</h1>
        <span>with useReducer, Zustand</span>
        <form
          style={{
            display: "flex",
            gap: "2px",
          }}
        >
          <Button asChild>
            <button type="button" onClick={down}>
              -
            </button>
          </Button>
          <Button asChild>
            <button type="button" onClick={reset}>
              0
            </button>
          </Button>
          <Button asChild>
            <button type="button" onClick={up}>
              +
            </button>
          </Button>
          <Input
            style={{ width: "50px" }}
            type="text"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
        </form>
        <span>{count}</span>
        <Button variant="outline" size="sm" asChild>
          <Link to={"/"}>홈으로 가기</Link>
        </Button>
      </article>
    </>
  );
};

export default Counter;
