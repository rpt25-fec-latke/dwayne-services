/* eslint-disable react/prop-types */
import React from 'react';
import {
  ColoredText, OptContainer, OptionsBox, OptionsIcon, IconWrapper, ModuleWrapper,
} from './styles/styles';

const Options = ({ options }) => (
  <div className="options">
    <ModuleWrapper>
      {options[0] && (
        <OptContainer>
          <IconWrapper>
            <OptionsIcon src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png" />
          </IconWrapper>
          <OptionsBox>
            <ColoredText>Single-Player</ColoredText>
          </OptionsBox>
        </OptContainer>
      )}
      {options[1] && (
        <OptContainer>
          <IconWrapper>
            <OptionsIcon src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_coop.png" />
          </IconWrapper>
          <OptionsBox>
            <ColoredText>Online Co-Op</ColoredText>
          </OptionsBox>
        </OptContainer>
      )}
      {options[2] && (
        <OptContainer>
          <IconWrapper>
            <OptionsIcon src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_coop.png" />
          </IconWrapper>
          <OptionsBox>
            <ColoredText>LAN Co-op</ColoredText>
          </OptionsBox>
        </OptContainer>
      )}
      {options[3] && (
        <OptContainer>
          <IconWrapper>
            <OptionsIcon src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_cloud.png" />
          </IconWrapper>
          <OptionsBox>
            <ColoredText>Steam Cloud</ColoredText>
          </OptionsBox>
        </OptContainer>
      )}
    </ModuleWrapper>
  </div>
);

export default Options;
