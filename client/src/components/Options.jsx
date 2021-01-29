import React from "react";

const Options = ({gameId, options}) => {
    return(
        <div className="options" >
            <div className="option">Single-Player</div>
            {options[1] && <div>Online Co-op</div>}
            {options[2] && <div>LAN Co-op</div>}
            {options[3] && <div>Steam Cloud</div>}
        </div>
    )
}

export default Options;

