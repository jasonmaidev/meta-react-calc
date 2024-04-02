import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState("?");
  const [inputText, setInputText] = useState("Type a number");

  function add(e) {
    e.preventDefault();
    if (typeof result === "string") {
      setResult(0);
      setResult((result) => result + Number(inputRef.current.value));
    } else {
      setResult((result) => result + Number(inputRef.current.value));
    }
  };

  function subtract(e) {
    // Add the code for the subtract function 
    e.preventDefault();
    if (typeof result === "string") {
      setResult(0);
      setResult((result) => result - Number(inputRef.current.value));
    } else {
      setResult((result) => result - Number(inputRef.current.value));
    }
  };

  function multiply(e) {
    // Add the code for the add function 
    e.preventDefault();
    // Set result to base 1 on first input to prevent zero number
    if (typeof result === "string") {
      setResult(1);
      setResult((result) => result * Number(inputRef.current.value));
    } else {
      setResult((result) => result * Number(inputRef.current.value));
    }
  };

  function divide(e) {
    // Add the code for the add function 
    e.preventDefault();
    // Prompt user to insert number before division
    if (typeof result === "string") {
      alert("Please add a number first!")
    } else if (result === 0) {
      // Propmt user about basic Math rules
      alert("Trying to divide by ZERO are we? xD")
    } else {
      setResult((result) => result / Number(inputRef.current.value));
    }
  };

  function resetInput(e) {
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0;
  };

  function resetResult(e) {
    // Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Intuitive Calculator V2</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* add the value of the current total, display initial result value before inserting number */}
          <strong> Result: </strong> {result ? result : 0}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder={inputText}
        />
        <button onClick={add}>add</button>
        {/* Add the subtract button */}
        <button onClick={subtract}>subtract</button>

        {/* Add the multiply button */}
        <button onClick={multiply}>multiply</button>

        {/* Add the divide button */}
        <button onClick={divide}>divide</button>

        {/* Add the resetInput button */}
        <button onClick={resetInput}>reset input</button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>reset result</button>

      </form>
    </div>
  );
}

export default App; 
