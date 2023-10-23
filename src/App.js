import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const additional = () => {
    dispatch({ type: "add" });
  };
  const minus = () => {
    dispatch({ type: "min" });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button
        onClick={additional}
        style={{
          height: "60px",
          borderRadius: "20px",
          width: "130px",
          background: "pink",
          border: "none",
          fontSize: "30px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Add
      </button>
      <button
        onClick={minus}
        style={{
          height: "60px",
          borderRadius: "20px",
          width: "130px",
          background: "red",
          border: "none",
          fontSize: "30px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Minus
      </button>
    </div>
  );
}

export default App;
