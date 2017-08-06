import React from 'react';

class Alberta extends React.Component {
    render() {
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const offset = -6;
        const bombay = utc + (3600000 * offset);
        const nd = new Date(bombay);
        const finalTimeAB = nd.toLocaleTimeString();

        return (
            <div className="alberta">
                <h3 className = "location">Alberta</h3>
                <p className="theTime">{finalTimeAB}</p>
            </div>
        )
    }
}

export default Alberta
