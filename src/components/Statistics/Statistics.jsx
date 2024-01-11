import React from 'react';
import './Statistics.css'

export const Statistics = ({ good, bad, neutral, total, percentage }) => {
  return (
    <div>
      <ul className='statistics'>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage} %</li>
      </ul>
    </div>
  );
};
