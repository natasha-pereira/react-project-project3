import { useContext } from 'react';
import '../App.css'
import { GameStateContext } from "../helpers/Context";
import { Questions } from '../helpers/Questions';

const EndScreen = () => {

    const { score, setScore, setGameState, userName } = useContext(GameStateContext);
    
    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }

    return (
			<div className="Endscreen">
				<h1 className="end head1">Quiz finished!</h1>
            <h2 className="end head1">{ userName }'s Performance is shared below</h2>
				<h3 className="head1">
					Your Score: {score} out of {Questions.length} ({(score/Questions.length)*100}%)
				</h3>
				<button className="quizBtn1" onClick={restartQuiz}>
					Retake quiz
				</button>
			</div>
		);
}

export default EndScreen