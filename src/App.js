import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

 const App = () => {
  return (
    <div className="App">
      <div className="Calculator-wrapper">
        <div className="row">
          <Display/>
        </div>
        <div className="row">
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="+" />
        </div>
        <div className="row">
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="-" />
        </div>
        <div className="row">
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="/" />
        </div>
        <div className="row">
          <Button symbol="." />
          <Button symbol="0" />
          <Button symbol="clear" />
          <Button symbol="=" />
          <Button symbol="*" />
        </div>
      </div>
    </div> 
  );
};

export default App;