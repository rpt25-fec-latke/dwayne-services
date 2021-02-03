import React from "react";
import { EvenBiggerContainer, ColoredText, OptContainer, OptionsBox, OptionsIcon, OptPictureBox } from "./styles/styles";

const Options = ({gameId, options}) => {
    console.log('options', options)
    return(
        <div className="options" >
            <EvenBiggerContainer>
            {options[0] && <OptContainer>
                <OptPictureBox>
                    <OptionsIcon src="./images/ico_singlePlayer.png"/>
                </OptPictureBox>
                <OptionsBox>
                    <ColoredText>Single-Player</ColoredText>
                </OptionsBox>
            </OptContainer>}
            {options[1] && <OptContainer>
                <OptPictureBox>
                <OptionsIcon src="./images/ico_coop.png"/>
                </OptPictureBox>
                <OptionsBox>
                  <ColoredText>Online Co-Op</ColoredText>
                </OptionsBox>
            </OptContainer>}
            {options[2] && <OptContainer>
                <OptPictureBox>
                    <OptionsIcon src="./images/ico_coop.png"/>
                </OptPictureBox>
                <OptionsBox>
                  <ColoredText>LAN Co-op</ColoredText>
                </OptionsBox>
            </OptContainer>}
            {options[3] && <OptContainer>
                <OptPictureBox>
                    <OptionsIcon src="./images/ico_cloud.png"/>
                </OptPictureBox>
                <OptionsBox>
                  <ColoredText>Steam Cloud</ColoredText>
                </OptionsBox>
            </OptContainer>}
            </EvenBiggerContainer>
        </div>
    )
}

export default Options;

