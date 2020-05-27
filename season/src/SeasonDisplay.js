import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';


const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr it's cold",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    //console.log(season);
    //const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    //const icon = season === 'winter' ? 'snowflake' : 'sun';
    const { text, iconName } = seasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>
                { text }
            </h1>     
            <i className={`icon-right massive ${iconName} icon`} />      
        </div>
    );
}

export default SeasonDisplay;
