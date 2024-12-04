import { useContext } from "react";
import { MyContext } from "./assets/MyContext";

const ChildOfContext = () => {
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <h1>{text}</h1>
      <button
        onClick={() =>
          setText("Value being added from child using context API")
        }
      >
        Click to change
      </button>
    </div>
  );
};
export default ChildOfContext;
