import React from 'react';
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const logButton = (letter:string):void => console.log(letter)

  return (
    <div>
      <Keyboard callback={logButton}/>
    </div>
  );
}

export default App;
