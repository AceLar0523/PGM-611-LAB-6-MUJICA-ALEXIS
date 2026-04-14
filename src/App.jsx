import { useState } from 'react'
import {Scene} from './components/3d/Scene'
import {Controls} from './components/ui/Controls'
import './App.css'

function App() {
  const [color, setColor] = useState('red')
  const [metal, setMetal] = useState(0.5)

  return (
    <div className="app-main">
      <Scene color ={color} metalness={metal}/>
      <Controls
        onColor={setColor}
        onMetal={setMetal}
        metal={metal}
      />
    </div>
  )
}

export default App
