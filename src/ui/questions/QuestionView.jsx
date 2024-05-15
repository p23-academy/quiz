import AnswerView from "../answers/AnswerView.jsx";

const QuestionView = ({question, nextButtonEnabled, setNextButtonEnabled, setPoints}) => {
  return (
    <div>
      <h3>{question.question}</h3>
      <div className={""}>
        {Object.entries(question.answers).map(([key, answer], index) => (
          <AnswerView
            key={key}
            id={key}
            answer={answer}
            correct={question.correct}
            nextButtonEnabled={nextButtonEnabled}
            setNextButtonEnabled={setNextButtonEnabled}
            setPoints={setPoints}/>
        ))}
      </div>
    </div>
  )
}

export default QuestionView