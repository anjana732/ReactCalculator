
import { useState } from 'react'
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
    
    const [calVal, setCalVal] = useState("")
    const onButtonClick = (buttonText) => {
      console.log(buttonText)
      if(buttonText === "C"){
        setCalVal("")
      }else if(buttonText === "="){
        const res = eval(calVal);
        setCalVal(res);
      }else{
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
      }
    }
  return (
    <>
    <div>
     <Display displayValue={calVal}/>
     <ButtonContainer onButtonClick={onButtonClick}/>
     </div>
    </>
  )
}

export default App
