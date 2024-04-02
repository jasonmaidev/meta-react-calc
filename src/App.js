import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [inputText, setInputText] = useState("Type a number");

  function add(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function subtract(e) {
    // Add the code for the subtract function 
    e.preventDefault();
    console.log("inputRef: ", inputRef);
    console.log("result: ", result);

    setResult((result) => result - Number(inputRef.current.value));
  };

  function multiply(e) {
    // Add the code for the add function 
    // if result is equal to zeo than make it eaqual to 1 to avoid zero result
    if (result == Number(0)) {
      setResult((result => result + Number(1)));
    }
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    // Add the code for the divide function 
    // if result is equal to zeo than make it eaqual to 1 to avoid zero result
    if (result == Number(0)) {
      setResult((result => result + Number(inputRef.current.value)));
    } else {
      // this will execute when numerator and denominator are both set
      setResult((result) => result / Number(inputRef.current.value));
    }
    e.preventDefault();
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
        <h1>Simplest Working Calculator V2</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* add the value of the current total, display null value for result if no value is given */}
          <strong> Result: </strong> {result === 0 ? '' : result}
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
