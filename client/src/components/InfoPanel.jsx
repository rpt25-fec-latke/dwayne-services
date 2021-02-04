import React from 'react';
import { BoldBox, Container, GrayText, InfoContainer, ModuleWrapper } from './styles/styles';

const InfoPanel = ({ infoPanel }) => (
  <Container>
    <ModuleWrapper>
      <InfoContainer>
        <div className="block_content_inner">
          <div className="details_block">
            <BoldBox>Title:</BoldBox>
            <GrayText>
              {infoPanel[0]}
            </GrayText>
            <br />
            <BoldBox>Genre:</BoldBox>
            {infoPanel[1]}
            <br />
            <BoldBox>Developer:</BoldBox>
            {infoPanel[2]}
            <br />
            <BoldBox>Publisher:</BoldBox>
            {infoPanel[3]}
            <br />
            <BoldBox>Franchise:</BoldBox>
            {infoPanel[4]}
            <br />
            <BoldBox>Release Date:</BoldBox>
            {infoPanel[5].toLocaleString()}
            <br />
          </div>
        </div>
      </InfoContainer>
    </ModuleWrapper>
  </Container>
);

export default InfoPanel;
