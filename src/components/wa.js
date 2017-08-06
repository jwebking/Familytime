import React from 'react';


class Washington extends React.Component {
    render() {
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const offset = -7;
        const bombay = utc + (3600000 * offset);
        const nd = new Date(bombay);
        const finalTimeWA = nd.toLocaleTimeString();

        return (
            <div className="washington">
            <h3>Washington</h3>
            <p>{finalTimeWA}</p>
            </div>
        )
    }
}

export default Washington
