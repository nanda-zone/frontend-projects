import { useState } from "react";

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
    <div>
      <h1>Flash Cards</h1>

      <div className="progress-bar">
        <div 
        className="progess" style={{ width: `${progress}%` }}
        ></div>
        <p>
          {currentCard + 1} of {cards.length}
        </p>
      </div>

      <div>
        {showAnswer ? (
          <p>{cards[currentCard].answer}</p>
        ) : (
          <h2>{cards[currentCard].question}</h2>
        )}

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
  );
}

export default App
