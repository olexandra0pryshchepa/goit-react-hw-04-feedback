import './FeedbackOptions.css'
import React from 'react';
 
export const FeedbackOptions = ({onGoodFeedback, onNeutralFeedback, onBadFeedback}) => (
  <div className="feedback-options">
    <button type="button" onClick={onGoodFeedback}>
      Good
    </button>
    <button type="button" onClick={onNeutralFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onBadFeedback}>
      Bad
    </button>
  </div>
);