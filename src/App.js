import MainHOC from "./MainHOC";
import ContextSample from "./ContextSample";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello this is the demo HOC</h1>
      <MainHOC />
      <ContextSample />
    </div>
  );
}
