import { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizCard from './components/QuizCard'
import ResultScreen from './components/ResultScreen'
import './App.css'
import questions from './data/questions'

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  
  function handleReplay() {
      setStarted(true)
      setFinished(false)
      setScore(0)
  }

  function handleMainMenu() {
    setStarted(false)
    setFinished(false)
    setScore(0)
  }

  return (
    <div className="app">
      <div className="background"></div>

      <div className="app-content">
        {!started && !finished && (
          <StartScreen 
            onStart={() => setStarted(true)}
          />
        )}

        {started && !finished && (
          <QuizCard 
            score={score}
            setScore={setScore}
            setFinished={setFinished}
          />
        )}

        {finished && (
          <ResultScreen 
            score={score}
            totalQuestion={questions.length}
            onReplay={handleReplay}
            onMainMenu={handleMainMenu}
          />
        )}
      </div>
    </div>
  )
}

export default App