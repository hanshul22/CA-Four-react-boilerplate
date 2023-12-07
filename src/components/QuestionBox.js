import React, { useState } from 'react';
import { createContext } from 'react';
import Result from './Result';

export const totalScore = createContext()
  


export default function QuestionBox({ question, number }) {
  const [highlighted, setHighlighted] = useState(false);

  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  return (
    <div>
      <div>
        <h2>Question: {number} out of 5</h2>
        {/* Rest of your question display */}
        <div className={highlighted ? 'highlighted' : ''}>
          <h2 onClick={toggleHighlight}>{question}</h2>
        </div>
        {/* Rest of your options */}
      </div>
    </div>
  );
}
