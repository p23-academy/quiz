import './App.css'
import QuestionView from "./ui/questions/QuestionView.jsx";
import questions from "./data/questions"
import {useState} from "react";
import ResultView from "./ui/result/ResultView.jsx";

function App() {
  const [index, setIndex] = useState(0);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [points, setPoints] = useState(0);

  const nextQuestion = () => {
    setIndex(index + 1)
    setNextButtonEnabled(false)
  }

  return (
    index < questions.length ?
      <>
        <h1>Kvizovi</h1>
        <QuestionView
          question={questions[index]}
          nextButtonEnabled={nextButtonEnabled}
          setNextButtonEnabled={setNextButtonEnabled}
          setPoints={setPoints}
        />
        <button onClick={nextQuestion} disabled={!nextButtonEnabled}>Dalje</button>
        <h5>Bodova: {points}</h5>
      </>
      :
      <ResultView points={points} setPoints={setPoints} setIndex={setIndex}/>
  )
}

export default App
