import { useState } from 'react'

import './App.css'
import Textbox from './components/Textbox'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Textbox/>
   </>
  )
}

export default App
