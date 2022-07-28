import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0')
  const handleChange = (event) => {
    setDisplay(display === "0" ? event.target.textContent : display + event.target.textContent)
  }
  const handleOperator = (event) => {
    setDisplay(display + " " + event.target.textContent + " ")
  }
  const handleEqual = () => {
    setDisplay(eval(display))
  }
  const handleDacimal = () => {
    const array = display.split(' ');
    const lastElement = array[array.length - 1]
    if (!lastElement.includes('.')) {
      setDisplay(display + '.')
    }
  }
  const handleClear = () => {
    setDisplay('0')
  }
  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">{display}</div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <div id="seven" onClick={handleChange}>7</div>
        <div id="eight" onClick={handleChange}>8</div>
        <div id="nine" onClick={handleChange}>9</div>
        <div id="multiply" onClick={handleOperator}>*</div>
        <div id="four" onClick={handleChange}>4</div>
        <div id="five" onClick={handleChange}>5</div>
        <div id="six" onClick={handleChange}>6</div>
        <div id="divide" onClick={handleOperator}>/</div>
        <div id="one" onClick={handleChange}>1</div>
        <div id="two" onClick={handleChange}>2</div>
        <div id="three" onClick={handleChange}>3</div>
        <div id="add" onClick={handleOperator}>+</div>
        <div id="zero" onClick={handleChange}>0</div>
        <div id="decimal" onClick={handleDacimal}>.</div>
        <div id="equals" onClick={handleEqual}>=</div>
        <div id="subtract" onClick={handleOperator}>-</div>
      </div>;

    </div>
  );
}

export default App;
