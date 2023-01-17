import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

 const App = () => {

  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const addToExp = (val) => {
    setExpression(prevExpression => prevExpression + val);
  }
  const clearDisplay = () => {
    setResult("");
    setExpression("");
  }
  
  return (
    <div className="App">
      <div className="Calculator-wrapper">
          <Display result={ result } expression={ expression }/>
        <div className="row">
          <Button symbol="7" handleClick={ addToExp }/>
          <Button symbol="8" handleClick={ addToExp }/>
          <Button symbol="9" handleClick={ addToExp }/>
          <Button symbol="+" handleClick={ addToExp }/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={ addToExp }/>
          <Button symbol="5" handleClick={ addToExp }/>
          <Button symbol="6" handleClick={ addToExp }/>
          <Button symbol="-" handleClick={ addToExp }/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={ addToExp }/>
          <Button symbol="2" handleClick={ addToExp }/>
          <Button symbol="3" handleClick={ addToExp }/>
          <Button symbol="/" handleClick={ addToExp }/>
        </div>
        <div className="row">
          <Button symbol="." handleClick={ addToExp }/>
          <Button symbol="0" handleClick={ addToExp }/>
          <Button symbol="AC" color="red" handleClick={ clearDisplay }/>
          <Button symbol="*" handleClick={ addToExp }/>
        </div>
        <div className="row"><Button symbol="=" color="orange" /></div>
      </div>
    </div> 
  );
};

export default App;