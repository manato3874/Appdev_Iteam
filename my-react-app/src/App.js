import React from 'react';
import './App.css';

function MyButton() {

  return (
    <button id="startbtn">
      I'm a button
    </button>

  );
}

export default function Myindex(){
  return(
    <div>
      <h1>便所の神様</h1>
      <MyButton/>
    </div>
  )
}
