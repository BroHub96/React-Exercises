import React from "react";
import PropTypes from 'prop-types'; 

export function CounterDisplay({ count }) {
    return (
        <h2 style={{ fontSize: '24px', color: 'darkblue' }}>
            Current Count: {count}
        </h2>
    );
}

CounterDisplay.propTypes = {
    count: PropTypes.number.isRequired,
};
