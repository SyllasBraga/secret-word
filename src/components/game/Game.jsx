import './Game.css'

const Game = ({ verifyLetter }) => {
    return (
        <div>
            <h1>Game</h1>
            <button onClick={verifyLetter}>End the game</button>
        </div>
    )
}

export default Game