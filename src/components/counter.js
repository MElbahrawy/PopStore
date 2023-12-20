import { CounterContext } from "../context/CounterContext";
import React, { useContext } from "react";
import "./counter.css";

export default function Counter() {
  let dataFromContext = useContext(CounterContext);

  return (
    <div className="pagination">
      <button
        id="dec"
        className="pagi paginationprev"
        onClick={dataFromContext.decrease}
      >
        ◀ Previous
      </button>
      <h3 className="paginationcounter">
        {dataFromContext.counter < 1 ? 1 : dataFromContext.counter}
      </h3>
      <button
        id="inc"
        className="pagi paginationnext"
        onClick={dataFromContext.increase}
      >
        Next ▶
      </button>
    </div>
  );
}
