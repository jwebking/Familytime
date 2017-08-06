import React from 'react';

class BritishColumbia extends React.Component {
    render() {
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const offset = -7;
        const bombay = utc + (3600000 * offset);
        const nd = new Date(bombay);
        const finalTimeBC = nd.toLocaleTimeString();

        return (
            <div className="britishcolumbia">
                <h3>British Columbia</h3>
                <p>{finalTimeBC}</p>
            </div>
        )
    }
}

export default BritishColumbia