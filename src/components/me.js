import React from 'react';


class Maine extends React.Component {
    render() {
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const offset = -4;
        const bombay = utc + (3600000 * offset);
        const nd = new Date(bombay);
        const finalTimeME = nd.toLocaleTimeString();

        return (
            <div className="maine">
            <h3>Maine</h3>
            <p>{finalTimeME}</p>
            </div>
        )
    }

}

export default Maine

//need to refresh and learn why both a class component and a function both work for this