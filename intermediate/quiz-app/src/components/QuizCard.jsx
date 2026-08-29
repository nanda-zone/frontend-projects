function QuizCard() {
    return (
        <div className="quiz-card">

            <p>Question 1 of 3</p>

            <h2>
                What does HTML stand for?
            </h2>

            <div className="answers">
                <button>
                    Hyper Text Markup Language
                </button>

                <button>
                    High Text Machine Language
                </button>

                <button>
                    Hyperlink Text Management Language
                </button>

                <button>
                    Home Tool Markup Language
                </button>
            </div>

        </div>
    );
}

export default QuizCard