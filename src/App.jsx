import { useState } from 'react'
import './App.css'
import Sude from './Sude'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Sude />
    </>
  )
}
export default App