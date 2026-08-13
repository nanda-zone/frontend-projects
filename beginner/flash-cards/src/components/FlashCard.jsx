function FlashCard({ question, answer, showAnswer, currentCard, totalCards }) {
    return (
        <div className={`flash-card ${showAnswer ? "flipped" : ""}`}>
            <p className="card-number">
            Card {currentCard + 1} of {totalCards}
            </p>
            <div className="flash-card-inner">
                {showAnswer ? (
                    <div className="flash-card-back">
                        <p>{answer}</p>
                    </div>
                ) : (
                    <div className="flash-card-front">
                        <h2>{question}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FlashCard;