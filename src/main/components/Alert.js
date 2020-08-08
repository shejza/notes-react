import React from "react";

export default function Alert({ message, close }) {
  return (
    <React.Fragment>
      <div className="alert alert__validation alert--danger">
        {message} <button onClick={() => close()}>x</button>
      </div>
    </React.Fragment>
  );
}
