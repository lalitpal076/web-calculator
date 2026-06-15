import Display from './components/Display'
import ButtonGrid from './components/ButtonGrid'
import { useState } from 'react'
import './App.css'
function App() {
  const [Expression, setExpression] = useState("")

  return (
    <>
      <div className='calculator'>
      <Display  value={Expression}/>
      <ButtonGrid setExpression={setExpression} Expression={Expression}/>
      </div>
    </>
  )
}

export default App
