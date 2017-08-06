import React from 'react';

function FormattedDate() {
  const d = new Date();
  return (
    <div className="local">
      <h3 className = "location">Here is the time where YOU live</h3>
      <p className="theTime"> {d.toLocaleTimeString()} </p>
    </div>
  )
}

export default FormattedDate

