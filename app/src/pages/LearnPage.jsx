import React, { useState, useMemo } from "react";
// import debounce from "lodash/debounce";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const calculateFactorial = (num) => {
    console.log("Calculating factorial...",num);
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  const handleChange=(e)=>{
    console.log("called from handleChange")
    setInput(e.target.value)
  }

//   const Call = debounce(handleChange,500)
  const factorial = useMemo(() => calculateFactorial(count), [count]);

 
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter some text"
          className="border border-black/10"
        />
        <div>
          <p>This is your message: {input}</p>
        </div>
      </div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>
        Factorial of {count} is: {factorial}
      </p>
    </div>
  );
}

export default ExpensiveCalculation;
