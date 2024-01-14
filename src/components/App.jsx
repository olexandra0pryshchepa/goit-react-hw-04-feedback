import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

 export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = (feedbackType) => {
    switch (feedbackType) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
   case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
        default:
        break;
    }
  };

  const total = good + neutral + bad;
  const percentage = total > 0 ? Math.round((good / total) * 100) : 0;

  
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </div>
  );
};