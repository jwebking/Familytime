import React from 'react';

class Minnesota extends React.Component {
    render() {
        const d = new Date();
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const offset = -5;
        const bombay = utc + (3600000 * offset);
        const nd = new Date(bombay);
        const finalTimeMN = nd.toLocaleTimeString();

        return (
            <div className="minnesota">
                <h3>Minnesota</h3>
                <p>{finalTimeMN}</p>
            </div>
        )
    }
}

export default Minnesota

