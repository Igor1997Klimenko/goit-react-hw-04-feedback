import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positive, index }) => {
    return (
        <ul key={index}>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive Feedback:{positive}%</li>
        </ul>
    )
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number,
}

export default Statistics