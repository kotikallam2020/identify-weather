import React from 'react';
import './css/seasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Yay!! It\'s Summer. Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr! It\'s Chilly!!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month>2 & month<9){
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer'
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
   const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h2>{text}</h2>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )
}
export default SeasonDisplay;