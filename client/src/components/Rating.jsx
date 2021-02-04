import React from 'react';
import { ModuleWrapper, RatingBureau, RatingContainer, RatingDescriptors, RatingInfo } from './styles/styles';

const Rating = ({ rating }) => (
  <ModuleWrapper>
    <RatingContainer>
      <RatingInfo>
        <div className="game_rating_icon">
          <img src="https://store.akamai.steamstatic.com/public/shared/images/game_ratings/ESRB/m.png" />
        </div>
        <div>
          <RatingDescriptors>
            <p>
              Blood and Gore
              <br />
              Partial Nudity
              <br />
              Sexual Content
              <br />
              Strong Language
              <br />
              Violence
            </p>
          </RatingDescriptors>
        </div>
      </RatingInfo>
      <RatingBureau>
        Rating for: ESRB
      </RatingBureau>
    </RatingContainer>
  </ModuleWrapper>
);

export default Rating;
