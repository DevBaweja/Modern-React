import React from 'react';
import Icon from './Icon';

import './SeasonDisplay.css';

const SeasonDisplay = props => {
    const getSeason = lat => {
        const month = new Date().getMonth();
        const start = 2,
            end = 9;
        if (month > start && month < end) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat > 0 ? 'winter' : 'summer';
        }
    };

    const seasonConfig = {
        season: getSeason(props.lat),
        summer: {
            text: "Let's hit the beach!",
            icon: 'sun',
        },
        winter: {
            text: "Burrr,it's chilly!",
            icon: 'snowflake',
        },
    };

    const { season } = seasonConfig;
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`SeasonDisplay ${season}`}>
            <Icon type={icon} pos="icon-left" />
            <h1>{text}</h1>
            <Icon type={icon} pos="icon-right" />
        </div>
    );
};

export default SeasonDisplay;
