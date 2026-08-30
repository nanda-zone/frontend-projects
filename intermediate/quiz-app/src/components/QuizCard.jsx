import { useEffect, useState } from 'react'
import questions from '../data/questions';

function QuizCard() {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const question = questions[currentQuestion]
    const [timeLeft, setTimeLeft] = useState(10); 
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((time) => time - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (timeLeft === 0) {
            setCurrentQuestion(currentQuestion + 1)
            setTimeLeft(10)
            setSelectedAnswer(null)
        }
    }, [timeLeft])

    function handleAnswerClick(answer) {
        setSelectedAnswer(answer)
    }

    function handleNext() {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
    }

    return (
        <div className="quiz-card">

            <p>Question {currentQuestion + 1} of {questions.length}</p>

            <p>time left: {timeLeft}s</p>

            <h2>
                {question.question}
            </h2>

            <div className="answers">
                {question.answers.map((answer) => (
                    <button
                        key={answer}
                        onClick={() => handleAnswerClick(answer)}
                        className={
                            selectedAnswer === answer
                            ? answer === question.correctAnswer
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
                    correct answer: {question.correctAnswer}
                </p>
            )}

            <div className="navigation">
                <button 
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export default QuizCard