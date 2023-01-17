import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

 const App = () => {

  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const addToExp = (val) => {
    const operators = ["+", "-", "*", "/","."];
    if (operators.indexOf(expression[expression.length-1]) !== -1 && operators.indexOf(val) !== -1) {
        setExpression(expression);
    } else {  
        setExpression(prevExpression => prevExpression + val);
    }
  }
  const clearDisplay = () => {
    setResult("");
    setExpression("");
  }
  const showResult = () => {
    setResult(parseFloat(eval(expression).toFixed(4)));
  }
  const del = () => {
    setExpression(expression.slice(0,-1));
  }
  
  return (
    <div className="App">
      <div className="Calculator-wrapper">
          <Display result={ result } expression={ expression }/>
        <div className="row">
          <Button symbol="7" handleClick={ addToExp }/>
          <Button symbol="8" handleClick={ addToExp }/>
          <Button symbol="9" handleClick={ addToExp }/>
          <Button symbol="+" bgcolor="grey" color="white" handleClick={ addToExp }/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={ addToExp }/>
          <Button symbol="5" handleClick={ addToExp }/>
          <Button symbol="6" handleClick={ addToExp }/>
          <Button symbol="-" bgcolor="grey" color="white" handleClick={ addToExp }/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={ addToExp }/>
          <Button symbol="2" handleClick={ addToExp }/>
          <Button symbol="3" handleClick={ addToExp }/>
          <Button symbol="/" bgcolor="grey" color="white" handleClick={ addToExp }/>
        </div>
        <div className="row">
          <Button symbol="." handleClick={ addToExp }/>
          <Button symbol="0" handleClick={ addToExp }/>
          <Button symbol="AC" bgcolor="red" color="white" handleClick={ clearDisplay }/>
          <Button symbol="*" bgcolor="grey" color="white" handleClick={ addToExp }/>
        </div>
        <div className="row">
        <Button symbol="Del" handleClick={ del } color="white" bgcolor="red" />
        <Button symbol="=" handleClick={ showResult } color="white" bgcolor="orange" />
        </div>
      </div>
    </div> 
  );
};

export default App;