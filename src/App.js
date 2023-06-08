import React, { useState } from "react";
import './index.css'

function App() {
// state 
const [weight, setWeight]=useState(0)
const [height , setHeight]=useState(0)
const [bmi , setBmi]=useState('')
const [message , setMessage]=useState('')




let calcBmi =(event)=>{
//prevent submitting
event.preventDefault()

if(weight===0 || height===0){
  alert('please enter a valid height and weight ')
}
else{
  let h=height/100;
  let bmi=(weight/(h*h));// bmi formula in lbs and in 
  setBmi(bmi.toFixed(1))

  // Logic for message 

  if(bmi < 19){
    setMessage('You are underweight')
  }
  else if(bmi >= 19 && bmi<25){
    setMessage('You are a healthy weight ');
  }
  else{
    setMessage('You are overweight ')
  }
}
}

// show img based on bmi calculation 
let imgSrc;
if(bmi<1){
  imgSrc=null;
}
else{
  if(bmi<19){
    imgSrc =require('../src/assets/underweight.gif')
  }
  else if(bmi>=19&& bmi<25){
    imgSrc =require('../src/assets/healthyweight.gif')
  }
  else{
    imgSrc =require('../src/assets/overweight.gif')
  }
}


let reload=()=>{
  window.location.reload();
}

  return (
    <div className="app">
     <div className="container">
      <h2 className="center">BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (kg)</label>
          <input value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Height (cm)</label>
          <input value={height} onChange={(event)=>setHeight(event.target.value)}/>
        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
        </div>
      </form>
      <div className="center">
        <h3>Your BMI is : {bmi} kg/m<sup>2</sup></h3>
        <p>{message}</p>
      </div>
      <div className="img-container">
        <img src={imgSrc} alt=""></img>
      </div>
     </div>
    </div>
  );
}

export default App;
