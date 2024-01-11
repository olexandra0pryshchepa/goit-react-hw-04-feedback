import './FeedbackOptions.css'
import React from 'react';
 
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <ul className='feedback-options'>
                {options.map(option => {
                    return (
                        <li key={option}>
                            <button onClick={() => onLeaveFeedback(option)}>
                                {option}
                            </button>
                       </li>
                   );
               })}
            </ul>
        </div>
    )
};