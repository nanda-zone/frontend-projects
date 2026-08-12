function FlashCard({ question, answer, showAnswer, currentCard, totalCards }) {
    return (
        <div className="flash-card">
            <p className="card-number">
            Card {currentCard + 1} of {totalCards}
            </p>
            {showAnswer ? (
            <p>{answer}</p>
            ) : (
            <h2>{question}</h2>
            )}
        </div>
    );
}

export default FlashCard;