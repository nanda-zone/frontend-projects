import { useEffect, useState } from 'react'
import questions from '../data/questions';

function QuizCard({ score, setScore, setFinished }) {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const question = questions[currentQuestion]
    const [timeLeft, setTimeLeft] = useState(10); 
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((time) => time - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (timeLeft === 0) {

            if (currentQuestion === questions.length - 1) {
            setFinished(true)
            return
        }

            setCurrentQuestion(currentQuestion + 1)
            setTimeLeft(10)
            setSelectedAnswer(null)
        }
    }, [timeLeft, currentQuestion, setFinished])

    function handleAnswerClick(answer) {
        setSelectedAnswer(answer)

        if (selectedAnswer) {
            return
        }

        setSelectedAnswer(answer)

        if (answer === question.correctAnswer) {
            setScore(score + 1)
        }
    }

    function handleNext() {
        if (currentQuestion === questions.length - 1) {
            setFinished(true)
            return
        }

        setCurrentQuestion(currentQuestion + 1)
        setTimeLeft(10)
        setSelectedAnswer(null)
    }

    return (
        <div className="quiz-card">
            <div className="wrapper-progress">
                <div className="progress-bar">
                    <div 
                        className="progress" 
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="quiz-card-header">
                <p id="q-indic">Question {currentQuestion + 1} of {questions.length}</p>

                <p id="timer">time left: {timeLeft}s</p>
            </div>

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

            <div className="navigation">
                {selectedAnswer && selectedAnswer !== question.correctAnswer && (
                    <p className="correct-answer">
                        correct answer: {question.correctAnswer}
                    </p>
                )}

                <button 
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                >
                    {currentQuestion === questions.length - 1
                        ? "Finish"
                        : "Next"
                    }
                </button>
            </div>

        </div>
    );
}

export default QuizCard