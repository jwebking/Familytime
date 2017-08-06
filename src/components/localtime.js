import React from 'react';

function FormattedDate() {
  const d = new Date();
  return (
    <div className="local">
      <h4>It is currently {d.toLocaleTimeString()} where YOU live</h4>
      <br />
    </div>
  )
}

export default FormattedDate

