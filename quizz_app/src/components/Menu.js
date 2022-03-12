import '../App.css';
import { GameStateContext } from '../helpers/Context'
import {useContext} from 'react'

function Menu() {

    const {gameState, setGameState, username, setUsername} = useContext(GameStateContext)

    return (
        <div className="menu">
            <h2 className='head1'>Lets begin! Shall we?</h2>
				<h4 className="head1">Please enter your name:</h4>
				<input
					className="menuInput"
					type="text"
					placeholder="Ex. John Smith"
					onChange={(event) => setUsername(event.target.value)}
				/>
				<button className="menuBtn" onClick={() => setGameState("playing")}>
					Start Quiz
				</button>
			</div>
		);
}

export default Menu;