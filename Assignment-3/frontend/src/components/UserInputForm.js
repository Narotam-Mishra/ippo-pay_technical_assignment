import React, { useState } from "react";
import '../style/UserInput.css'
import strongPasswordChecker from "../code/FinMinSteps";
import { useSnackbar } from 'notistack';
import axios from 'axios'

const UserInputForm = () => {
    const [inputVal, setInputVal] = useState('');
    const [result, setResult] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    const handleOutput = () => {
        let minSteps = strongPasswordChecker(inputVal);
        setResult(minSteps)
        // setInputVal('');
    }

    let outputValue = result;
    const saveToDB = () => {
      console.log(result);
      const data = {
        outputValue
      };
      axios
      .post('http://localhost:7171/saveOutput', data)
      .then(() => {
        enqueueSnackbar('Book created successfully!', {variant: 'success'});
        console.log('Save to DB successfully!!');
      })
      .catch((err) => {
        // alert('An error happened. Please Check console');
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(err);
      })    
    }

    return (
      <>
      <h2 className="header">Find Minimum Number of steps required to make password strong</h2>
        <div className="userInputContainer">
          <label className="input-label" htmlFor="userInput">
            Enter your Input
          </label>
          <input
            className="inputBox"
            required
            id="userInput"
            type="text"
            placeholder="example abc321"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <div>
          <button onClick={handleOutput} className="outputShowBtn">
            Show Output
          </button>
          <button onClick={saveToDB} className="saveTodbBtn">
            Save output to DB
          </button>
          </div>
        </div>

        <div className="output-div">
          {result !== null && (
            <p className="output-content">Your Output is: {result} </p>
          )}
        </div>
      </>
    );
};

export default UserInputForm;
