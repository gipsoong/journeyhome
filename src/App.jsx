import { useState } from 'react'
import './App.css'
import { FcHome } from "react-icons/fc"
import Form from './components/form'

Form

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> <FcHome />Mortgage Calculator</h1>
        <Form />
      </div>
    </>
  )
}

export default App
