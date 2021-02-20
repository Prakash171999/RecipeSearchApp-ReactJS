import React from "react";

const Alert = ({ alertMsg }) => {
  return (
    <div className="alert">
      <h3>{alertMsg}</h3>
    </div>
  );
};

export default Alert;
