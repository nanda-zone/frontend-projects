function Navigation({ 
    totalCards, 
    showAnswer, 
    setShowAnswer, 
    currentCard, 
    setCurrentCard 
}) {
    return (
        <div className="navigation">
            <button onClick={() => {setCurrentCard(currentCard - 1);
                setShowAnswer(false);}
            }
                disabled={currentCard === 0}
            >
                Previous
            </button>

            <button
            onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
            
            <button onClick={() => {setCurrentCard(currentCard + 1);
                setShowAnswer(false);}
            }
                disabled={currentCard === totalCards - 1}  
            >
                Next
            </button>
        </div>
    );
}

export default Navigation;