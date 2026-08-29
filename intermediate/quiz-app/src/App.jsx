import { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizCard from './components/QuizCard';
import './App.css'

function App() {
  const [started, setStarted] = useState(false);
  const [finished] = useState(false);
  
  return (
    <>
      {!started && !finished && (
        <StartScreen 
          onStart={() => setStarted(true)}
        />
      )}

      {started && !finished && (
        <QuizCard />
      )}
    </>  
  )
}

export default App