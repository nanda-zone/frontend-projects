function ResultScreen({ score, totalQuestion, onReplay, onMainMenu }) {
    return (
        <div className="result-screen">
            <h1>Quiz Complete!</h1>

            <p id="score-container">Your score: {score}/{totalQuestion}</p>

            <button 
                onClick={onReplay}
                className="main-btn"
            >
                Play Again!
            </button>

            <button 
                onClick={onMainMenu}
                id="back-btn"
            >
                Back to Main Menu
            </button>
        </div>
    );
}

export default ResultScreen;