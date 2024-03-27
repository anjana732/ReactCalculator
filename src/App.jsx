
import { useState } from 'react'
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
    
    const [calVal, setCalVal] = useState("0")
    const onButtonClick = (buttonText) => console.log(buttonText)
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
