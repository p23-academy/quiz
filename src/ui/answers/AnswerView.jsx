import "./AnswerView.css"
import {useState} from "react";

const AnswerView = ({id, answer, correct, nextButtonEnabled, setNextButtonEnabled, setPoints}) => {

  const [buttonClass, setButtonClass] = useState("")

  if (!nextButtonEnabled && buttonClass.length) {
    setButtonClass("")
  }

  const onClick = () => {
    if (nextButtonEnabled) {
      return
    }
    if (id === correct) {
      setButtonClass("correct")
      setPoints(points => points + 1)
    } else {
      setButtonClass("incorrect")
    }
    setNextButtonEnabled(true)
  }

  return (
    <button className={buttonClass} onClick={onClick}>{answer}</button>
  )
}

export default AnswerView