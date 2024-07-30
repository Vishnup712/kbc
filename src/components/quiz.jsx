import { useEffect, useState } from "react";

export default function Quiz({ data, setStop, questionNumber, setQuestionNumber, }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1])

  }, [data, questionNumber]);

  // console.log(data[0][0].question);
  console.log(data);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration);

  }
  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if (a.correct) {
        setQuestionNumber(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    })


  }
  return (
    <div className="quiz">

      <div className="wrapper">
        <p className="question">
          {/* {data[0][0].question} */}
        </p>
        <p className="answer option-a">
        </p>
        <p className="answer option-a">

        </p>
      </div>
    </div>
  )
}
