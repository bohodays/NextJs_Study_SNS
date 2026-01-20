import { useCount } from "@/store/count";
import React from "react";

const Viewer = () => {
  const count = useCount();

  return <div>{count}</div>;
};

export default Viewer;
