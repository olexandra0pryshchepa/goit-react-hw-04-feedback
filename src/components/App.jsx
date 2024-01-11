
import React, { useState } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const GoodFeedback = () => {
    setGood(prevState => prevState + 1);
  };

  const NeutralFeedback = () => {
    setNeutral(prevState => prevState + 1);
  };

  const BadFeedback = () => {
    setBad(prevState => prevState + 1);
  };
  

  const total = good + neutral + bad;
  const percentage = total > 0 ? Math.round((good / total) * 100) : 0;


  
   
    return (
      <div>
        <Section title="Please level feedback">
          <FeedbackOptions
           onGoodFeedback={GoodFeedback}
          onNeutralFeedback={NeutralFeedback}
          onBadFeedback={BadFeedback}
          />
        </Section>

        <Section title="Statictics">
          {good !== 0 ||
          neutral !== 0 ||
          bad !== 0 ? (
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