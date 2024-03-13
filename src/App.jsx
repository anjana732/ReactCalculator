
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
    const num = [0,1,2,3,4,5,6,7,8,9,"+","-","*","/"]
  return (
    <>
    <div>
     <Display/>
     <ButtonContainer numbers={num}/>
     </div>
    </>
  )
}

export default App
