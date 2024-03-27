
import { useState } from 'react'
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
    
    const [calVal, setCalVal] = useState("0")
  return (
    <>
    <div>
     <Display displayValue={calVal}/>
     <ButtonContainer onButtonClick={() => console.log("button clicked")}/>
     </div>
    </>
  )
}

export default App
