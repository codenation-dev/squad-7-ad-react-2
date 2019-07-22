import React from 'react';
import PropTypes from 'prop-types';
import { RepoForked } from 'styled-icons/octicons/RepoForked';
import { Star } from 'styled-icons/boxicons-solid/Star';
import {
  StyledCardItem,
  Title,
  Meta,
  Status,
  Info,
  StatusForks,
  StatusStars,
  Description,
} from './style';

const CardItem = ({ repository }) => {
  return (
    <StyledCardItem>
      <Title>{repository.title}</Title>
      <Meta>
        {repository.meta.language} - {repository.meta.date}
      </Meta>
      <Info>
        <Description>{repository.description}</Description>
        <Status>
          <StatusStars>
            <Star color="#afafaf" size="14" />
            {repository.status.stars}
          </StatusStars>
          <StatusForks>
            <RepoForked color="#afafaf" size="14" />
            {repository.status.forks}
          </StatusForks>
        </Status>
      </Info>
    </StyledCardItem>
  );
};

CardItem.propTypes = {
  repository: PropTypes.instanceOf(Object),
};

CardItem.defaultProps = {
  repository: {},
};

export default CardItem;
