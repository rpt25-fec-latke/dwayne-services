import React from "react";
import { ColoredText, OptionsBox, OptionsIcon } from "./styles/styles";

const Options = ({gameId, options}) => {
    console.log('options', options)
    return(
        <div className="options" >
            {options[0] && <div>
                <OptionsIcon src="./images/ico_singlePlayer.png"/>
                <OptionsBox>
                    <ColoredText>Single-Player</ColoredText>
                </OptionsBox>
            </div>}
            {options[1] && <div>
                <OptionsIcon src="./images/ico_coop.png"/>
                <OptionsBox>Online Co-op</OptionsBox>
            </div>}
            {options[2] && <div>
                <OptionsIcon src="./images/ico_coop.png"/>
                <OptionsBox>LAN Co-op</OptionsBox>
            </div>}
            {options[3] && <div>
                <OptionsIcon src="./images/ico_cloud.png"/>
                <OptionsBox>Steam Cloud</OptionsBox>
            </div>}
        </div>
    )
}

export default Options;

