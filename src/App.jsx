import Display from './components/Display'
import ButtonGrid from './components/ButtonGrid'
import { useState } from 'react'
import calculator from './Utillity/calculation'
import './App.css'
function App() {
  const [expression, setExpression] = useState("")
  console.log(expression);
  const runCalculator=(expression)=>{
    setExpression(calculator(expression));
  }

  return (
    <>
      <div className='calculator'>
      <Display  value={expression}/>
      <ButtonGrid setExpression={setExpression} expression={expression} runCalculator={runCalculator} />
      </div>
    </>
  )
}

export default App
