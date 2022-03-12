import { useContext, useState } from 'react'
import '../App.css'
import { Questions } from '../helpers/Questions'
import {GameStateContext} from '../helpers/Context'

function Quiz() {
    const {score, setScore, gameState, setGameState} = useContext(GameStateContext)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionSelected, setOptionSelected] = useState("")

    const optionChosen = (option) => {
        setOptionSelected(option)
    }

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionSelected)
            setScore(score + 1)
        
        setCurrentQuestion(currentQuestion+1)
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionSelected)
            setScore(score + 1);
        
        setGameState("finished")
    }

    return (
			<div className="quiz">
				<h1 className="questions">{Questions[currentQuestion].prompt}</h1>
				<div className='options'>
					<button onClick={() => optionChosen("optionA")}>
						{Questions[currentQuestion].optionA}
					</button>
					<button onClick={() => optionChosen("optionB")}>
						{Questions[currentQuestion].optionB}
					</button>
					<button onClick={() => optionChosen("optionC")}>
						{Questions[currentQuestion].optionC}
					</button>
					<button onClick={() => optionChosen("optionD")}>
						{Questions[currentQuestion].optionD}
					</button>
				</div>
				<div>
					{currentQuestion === Questions.length - 1 ? (
						<button className="quizBtn1" onClick={finishQuiz}>
							Finish Quiz
						</button>
					) : (
						<button className="quizBtn2" onClick={nextQuestion}>
							Next question
						</button>
					)}
				</div>
			</div>
		);
}

export default Quiz