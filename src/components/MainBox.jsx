import React, { useRef, useState } from "react";
import Result from "./Result"; // Import the Result component
import questions from "../questions.js";

function MainBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [hilight, setHighlight] = useState(true);

  let highref = useRef();

  function high() {
    setHighlight(true);
  }

  function low() {
    setHighlight(false);
  }

  const handleAnswerClick = (answer) => {
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
    setSelectedAnswers([...selectedAnswers, answer]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0); // Reset the score when restarting the quiz
  };

  return (
    <div className="mainbox">
      <Result showResult={showResult} score={score} resetQuiz={resetQuiz} />
      {!showResult && (
        <div>
          <div className="outof">
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
          </div>
          <div className="questionbox">
            <h1
              className="question"
              ref={highref}
              style={{ color: hilight ? "red" : "white" }}
            >
              {questions[currentQuestion].text}
            </h1>
          </div>
          <div className="optionbox">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className="ans"
                onClick={() => {
                  if (option.isCorrect) {
                    setScore(score + 1);
                  }
                  handleAnswerClick(option);
                }}
              >
                {option.text}
              </div>
            ))}
          </div>
          {/* Move the buttons here */}
          <div className="lowerbtn">
            <div className="highlitsDiv">
              <button className="highlits" onClick={high}>
                Highlight
              </button>
            </div>
            <div className="removeHighlitsDiv">
              <button className="removeHighlits" onClick={low}>
                Remove Highlight
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainBox;
