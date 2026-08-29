import { useState } from 'react'
import questions from '../data/questions';

function QuizCard() {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const currentQuestion = questions[0];


    function handleAnswerClick(answer) {
        setSelectedAnswer(answer);
    }

    return (
        <div className="quiz-card">

            <p>Question 1 of {questions.length}</p>

            <h2>
                {currentQuestion.question}
            </h2>

            <div className="answers">
                {currentQuestion.answers.map((answer) => (
                    <button
                        key={answer}
                        onClick={() => handleAnswerClick(answer)}
                        className={
                            selectedAnswer === answer
                            ? answer === currentQuestion.correctAnswer
                                ? "correct"
                                : "incorrect"
                            : ""
                        }
                    >
                        {answer}
                    </button>
                ))}
            </div>

            {selectedAnswer && (
                <p>
                    correct answer: {currentQuestion.correctAnswer}
                </p>
            )}

        </div>
    );
}

export default QuizCard