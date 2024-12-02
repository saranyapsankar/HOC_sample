import HOC from "./HOC";
const MainHOC = ({ passedValue }) => {
  console.log(passedValue);
  return (
    <div>
      <h3>This is the main component wrapped in HOC</h3>
      <span>And the value : {passedValue} </span>
    </div>
  );
};
export default HOC(MainHOC);
