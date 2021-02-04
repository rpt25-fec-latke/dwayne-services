import React from 'react';
import {
  BoldBox, Container, GrayWrapper, InfoContainer, ModuleWrapper, LinkWrapper
} from './styles/styles';
import moment from 'moment';

const InfoPanel = ({ infoPanel }) => (
  <Container>
    <ModuleWrapper>
      <InfoContainer>
        <GrayWrapper>
          <BoldBox>Title:</BoldBox>
          {infoPanel[0]}
          <br />
        </GrayWrapper>
        <LinkWrapper>
          <BoldBox>Genre:</BoldBox>
          {infoPanel[1]}
          <br />
        </LinkWrapper>
        <LinkWrapper>
          <BoldBox>Developer:</BoldBox>
          {infoPanel[2]}
          <br />
        </LinkWrapper>
        <LinkWrapper>
          <BoldBox>Publisher:</BoldBox>
          {infoPanel[3]}
          <br />
        </LinkWrapper>
        <LinkWrapper>
          <BoldBox>Franchise:</BoldBox>
          {infoPanel[4]}
          <br />
        </LinkWrapper>
        <GrayWrapper>
          <BoldBox>Release Date:</BoldBox>
          {moment(infoPanel[5]).format('MMM D, YYYY')}
          <br />
        </GrayWrapper>
      </InfoContainer>
    </ModuleWrapper>
  </Container>
);

export default InfoPanel;
