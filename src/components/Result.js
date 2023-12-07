import React from 'react';

export default function Result({ showResult, score, resetQuiz }) {
  return (
    <div className='rs'>
      {showResult ? (
        <div className="result-container">
          <h2>Quiz Completed!</h2>
          <h3>Your Score: {score}*100%</h3>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : null}
    </div>
  );
}
