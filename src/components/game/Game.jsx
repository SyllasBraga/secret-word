import { useState, useRef } from 'preact/hooks'
import './Game.css'

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetter,
    wrongLetters,
    guesses,
    score }) => {

    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);
        setLetter("");
        letterInputRef.current.focus();
    }
    return (
        <div className='game'>
            <p className="points">
                <span>Score: {score}</span>
            </p>
            <h1>Guees the word</h1>
            <h3 className="tip">
                Tip about the word: <span>{pickedCategory}</span>
            </h3>
            <p>Do you still have {guesses} attempt(s)</p>
            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetter.includes(letter) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                ))}
            </div>
            <div className="letterContainer">
                <p>Try to guess a letter</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Play!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letters already chosen</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}

export default Game