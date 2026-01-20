import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";
import React from "react";

const CounterPage = () => {
  const { count, increase, decrease } = useCountStore();

  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <div>{count}</div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
};

export default CounterPage;
