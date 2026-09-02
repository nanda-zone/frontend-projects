function StartScreen({ onStart }) {
    return (
        <div className="start-screen">
            <h1>JavaScript QUIZ</h1>
            <p>Test your JavaScript knowledge!</p>

            <button 
                onClick={onStart}
                className="main-btn"
            >
                Start Quiz
            </button>
        </div>
    );
}

export default StartScreen;