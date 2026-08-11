import { useState } from "react";
import "./App.css";

const cards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "In JavaScript, var is function-scoped, while let and const are block-scoped.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The DOM is a representation of an HTML document that JavaScript can manipulate.",
  },
  {
    question: "What is a closure?",
    answer:
      "A closure is a function that remembers variables from its outer scope.",
  },
];

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const progress = ((currentCard + 1) / cards.length) * 100;

  return (
    <div className="app">
      <h1>Flash Cards</h1>

      <div className="wrapper">
        <p>
          Card {currentCard + 1} of {cards.length}
        </p>
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>
          {progress.toFixed(0)}%
        </p>
      </div>

      <div className="flash-card">
        {showAnswer ? (
          <p>{cards[currentCard].answer}</p>
        ) : (
          <h2>{cards[currentCard].question}</h2>
        )}

        <div className="navigation">
          <button onClick={() => {setCurrentCard(currentCard - 1);
            setShowAnswer(false);}
          }
            disabled={currentCard === 0}
          >
            Previous
          </button>

          <button
          onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          
          <button onClick={() => {setCurrentCard(currentCard + 1);
            setShowAnswer(false);}
          }
            disabled={currentCard === cards.length - 1}  
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
