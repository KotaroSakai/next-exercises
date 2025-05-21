"use client";
import { useState } from "react";

export default  function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    let calculation = 0;

    switch (operator) {
      case "+":
        calculation = a + b;
        break;
      case "-":
        calculation = a - b;
        break;
      case "*":
        calculation = a * b;
        break;
      case "/":
        if (b === 0) {
          setResult("0で割ることはできません");
          return;
        }
        calculation = a / b;
        break;

    }
      

    setResult(calculation);
  };

  return (
    <div>
      <h2>計算機</h2>
      <input 
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={() => handleCalculate("+")}>+</button>
      <button onClick={() => handleCalculate("-")}>-</button>
      <button onClick={() => handleCalculate("*")}>*</button>
      <button onClick={() => handleCalculate("/")}>/</button>
      <p>結果: {result}</p>
    </div>
  );

};