import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState(null);
  const [prev, setPrev] = useState(null);
  const [track, setTrack] = useState(false);

  const handleNumberButtons = number => {
    if (display === '0') {
      setDisplay(number);
    } else {
      let result = display.toString();
      setDisplay(track ? number : result + number);
      setTrack(false);
    }
  };

  const handleOperator = operator => {
    setPrev(parseFloat(display));
    setOperand(operator);
    setTrack(true);
  };
  console.log(prev);
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
      case '%':
        result = prev % current;
        break;
      default:
        result = current;
    }

    setPrev(null);
    setOperand(null);
    setDisplay(result.toString());
  };

  const handleDecimal = () => {
    if (!display.toString().includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleSign = () => {
    if (display < '0') {
      setDisplay(Math.abs(display));
    } else {
      setDisplay(-display);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setOperand(null);
    setPrev(null);
  };

  return (
    <div className='mt-10 w-96 shadow-xl'>
      <div className='h-16 bg-gray-500 text-white font-bold relative'>
        <div className='absolute right-2 top-2 text-5xl'>{display}</div>
      </div>

      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300' onClick={handleClear}>
          AC
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={handleSign}>
          +/-
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={() => handleOperator('%')}>
          %
        </button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300' onClick={() => handleOperator('/')}>
          /
        </button>
      </div>
      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300' onClick={() => handleNumberButtons(7)}>
          7
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={() => handleNumberButtons(8)}>
          8
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={() => handleNumberButtons(9)}>
          9
        </button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300' onClick={() => handleOperator('*')}>
          x
        </button>
      </div>
      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300' onClick={() => handleNumberButtons(4)}>
          4
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={() => handleNumberButtons(5)}>
          5
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={() => handleNumberButtons(6)}>
          6
        </button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300' onClick={() => handleOperator('-')}>
          -
        </button>
      </div>
      <div>
        <button className='w-24 h-24 bg-gray-200 border border-l-0 border-gray-300' onClick={() => handleNumberButtons(1)}>
          1
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={() => handleNumberButtons(2)}>
          2
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={() => handleNumberButtons(3)}>
          3
        </button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300' onClick={() => handleOperator('+')}>
          +
        </button>
      </div>
      <div>
        <button className=' w-48 h-24 bg-gray-200 border border-l-0 border-gray-300' onClick={() => handleNumberButtons(0)}>
          0
        </button>
        <button className='w-24 h-24 bg-gray-200 border border-gray-300' onClick={handleDecimal}>
          .
        </button>
        <button className='w-24 h-24 bg-yellow-500 border border-r-0 border-gray-300' onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
