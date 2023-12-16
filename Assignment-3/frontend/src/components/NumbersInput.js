import React, { useState } from 'react'

const NumbersInput = () => {
  // State to manage the input value
  const [number, setNumber] = useState("");
  let arrNums = [];

  // Event handler to update the state when the input changes
  const handleInputChange = (event) => {
    // Ensure that the input is a valid number
    const inputNumber = parseFloat(event.target.value);

    // Update the state only if the input is a valid number
    if (!isNaN(inputNumber)) {
      setNumber(inputNumber);
      arrNums.push(inputNumber);
    }
  };
  return (
    <div>
      <label htmlFor="numberInput">Enter a Number: </label>
      <input
        type="text"
        id="numberInput"
        value={number}
        onChange={handleInputChange}
      />

      <p>Entered Number: {arrNums}</p>
    </div>
  );
};

export default NumbersInput