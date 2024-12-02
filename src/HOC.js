import { useState } from "react";

const HOC = (Component) => {
  const subText = "DeMos in";
  return () => <Component passedValue={subText} />;
};

export default HOC;
