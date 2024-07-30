import React, { useEffect, useMemo, useState } from 'react';
import './app.css';
import Quiz from './components/quiz';
import Timer from './components/Timer';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("$ 0");
  const [quiz, setQuiz] = useState([]);

  console.log("here "+ quiz);

  useEffect(()=>{
    fetch('https://quizapi.io/api/v1/questions?apiKey=odsEY69I8GzXJnFDuj2ybsJibKPQMWvlmNvAhs7u&limit=1')
    .then(result => result.json())
    .then(data => {
      setQuiz(data)
    })
 },[])
  
//  let quizArray = []
//   quiz.map((quiz) => {
//     const data = [
//       {
//         id: 1,
//         question: quiz.question,
//         answers: [
//           {
//             text: quiz.answers.answer_a,
//             correct: quiz.correct_answers.answer_a_correct
//           },
//           {
//             text: quiz.answers.answer_b,
//             correct: quiz.correct_answers.answer_b_correct
//           },
//           {
//             text: quiz.answers.answer_c,
//             correct: quiz.correct_answers.answer_c_correct
//           },
//           {
//             text: quiz.answers.answer_d,
//             correct: quiz.correct_answers.answer_d_correct
//           },
//         ],
//       }
//     ];
//     quizArray.push(data)
//   })

  const moneyPyramid = useMemo(()=>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),[]) 

  useEffect(()=>{
     questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount);
  },[moneyPyramid, questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className="endText">You Earned : {earned} </h1> : (
          <>
           <div className="top">
           <div className="timer"><Timer setStop ={setStop} questionNumber = {questionNumber}/></div>
           <div className="bottom">
             <Quiz data={quiz} setStop={setStop}
             questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
             </div>
         </div></>
        )}
      
        
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m => (
            <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
