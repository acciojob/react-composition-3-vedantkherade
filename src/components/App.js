import React from "react";
import "../styles/Tooltip.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

     <h2 className="tooltip">
        <Tooltip text="This is a tooltip">Hover over me</Tooltip>
      </h2>

      <hr></hr>

      <p className="tooltip">
       <Tooltip text="This is another tooltip"> Hover over me to see another tooltip</Tooltip>
      </p>

      <hr></hr>
    </div>
  );
};

export default App;