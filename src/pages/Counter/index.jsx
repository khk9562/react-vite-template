import useStore from "@/stores/count";
import { Button } from "@/components/ui/button";

const Counter = () => {
  const { count, num, setNum, up, down, reset } = useStore();

  return (
    <article className="box">
      <h2>useReducer test</h2>
      <form>
        <Button onClick={down}>-</Button>
        <Button onClick={reset}>0</Button>
        <Button onClick={up}>+</Button>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </form>
      <span>{count}</span>
    </article>
  );
};

export default Counter;
