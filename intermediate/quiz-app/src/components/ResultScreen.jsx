function ResultScreen({ score, totalQuestion }) {
    return (
        <div className="return-screen">
            <h1>Quiz Complete!</h1>

            <p>Your score: {score}/{totalQuestion}</p>
        </div>
    );
}

export default ResultScreen;