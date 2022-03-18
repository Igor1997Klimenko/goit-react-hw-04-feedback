import React from "react";
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => (
            <button
                className={s.Button}
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </button>
        ))
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;