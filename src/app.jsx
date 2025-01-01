import './app.css';
import StartScreen from './components/start-screen/StartScreen';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { wordsList } from './data/words'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

export function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <StartScreen />}
      {gameStage === 'end' && <StartScreen />}
    </div>
  )
}