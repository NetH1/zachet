import './QuizModules.css'
import { useState } from "react";
function QuizModules() {
    const questions = [
        {
            questionText: "Как сделать деньги?",
            answerOptions: [
                { answerText: "Заработать", isCorrect: true },
                { answerText: "Продажи", isCorrect: false },
                { answerText: "Просмотр", isCorrect: false },
                { answerText: "Мечта", isCorrect: false }
            ]
        },
        {
            questionText: "Кто твой учитель?",
            answerOptions: [
                { answerText: "Jeff Bezos", isCorrect: false },
                { answerText: "Ratan Tata", isCorrect: true },
                { answerText: "Mukesh Ambani", isCorrect: false },
                { answerText: "Gautam Adani", isCorrect: false }
            ]
        },
        {
            questionText: "Кто самый богатый?",
            answerOptions: [
                { answerText: "Jeff Bezos", isCorrect: false },
                { answerText: "Elon Musk", isCorrect: true },
                { answerText: "Mukesh Ambani", isCorrect: false },
                { answerText: "Warren Buffett", isCorrect: false }
            ]
        },
        {
            questionText: "Сколько всего стран в мире?",
            answerOptions: [
                { answerText: "120", isCorrect: false },
                { answerText: "183", isCorrect: false },
                { answerText: "170", isCorrect: false },
                { answerText: "195", isCorrect: true }
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuetions = currentQuestion + 1;
        if (nextQuetions < questions.length) {
            setCurrentQuestion(nextQuetions);
        } else {
            setShowScore(true);
        }
    };
    return (
        <>
            <h1 className="header">Quiz</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section">
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>
                                {questions.length}
                            </div>
                            <div className="question-text text-3xl text-white">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>

                        <div className="answer-section ">
                            {questions[currentQuestion].answerOptions.map((answerOptions) => (
                                <button key={answerOptions.answerText} className='button-quiz my-2'
                                    onClick={() =>
                                        handleAnswerButtonClick(answerOptions.isCorrect)
                                    }
                                >
                                    {answerOptions.answerText}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default QuizModules
