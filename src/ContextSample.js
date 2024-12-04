import { useState, React } from "react";
import { MyContext } from "./assets/MyContext";
import ChildOfContext from "./ChildOfContext";

const ContextSample = () => {
  const [text, setText] = useState("Value being passed using context API");
  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <ChildOfContext />
      </MyContext.Provider>
    </div>
  );
};
export default ContextSample;
