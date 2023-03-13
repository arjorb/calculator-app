import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleNumberButtons = number => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = operator => {
    setPrevValue(parseFloat(display));
    setOperand(operator);
    setDisplay('0');
  };

  const handleEqual = () => {
    const current = parseFloat(display);
    let result;

    switch (operand) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        result = current;
    }
  };

  return (
    <div className='mt-10 w-96 shadow-xl'>
      <div className='h-16 bg-gray-500'></div>

      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300'>AC</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>+/-</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>%</button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300'>/</button>
      </div>
      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300' onClick={() => handleNumberButtons(7)}>
          7
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>8</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>9</button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300'>x</button>
      </div>
      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300'>4</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>5</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>6</button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300'>-</button>
      </div>
      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300'>1</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>2</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>3</button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300'>+</button>
      </div>
      <div>
        <button className=' w-48 h-24 bg-gray-200 border border-l-0 border-gray-300'>0</button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300'>.</button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300'>=</button>
      </div>
    </div>
  );
};

export default Calculator;
