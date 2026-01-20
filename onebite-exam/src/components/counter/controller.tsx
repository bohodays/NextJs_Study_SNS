import React from "react";
import { Button } from "../ui/button";
import { useDecreaseCount, useIncreaseCount } from "@/store/count";

const Controller = () => {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
};

export default Controller;
