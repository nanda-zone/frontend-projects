import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";
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
      <div className="container">
        <div className="wrapper">
          <FlashCard
            question={cards[currentCard].question}
            answer={cards[currentCard].answer}
            showAnswer={showAnswer}
            currentCard={currentCard}
            totalCards={cards.length}
          />

          <ProgressBar
            progress={progress}
          />

          <Navigation
            totalCards={cards.length}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
          />
        </div>
      </div>
    </div>
  );
}

export default App
