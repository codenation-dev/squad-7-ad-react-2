import React from 'react';
import PropTypes from 'prop-types';
import { RepoForked } from 'styled-icons/octicons/RepoForked';
import { Star } from 'styled-icons/boxicons-solid/Star';
import moment from 'moment';

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

const CardItem = ({ repository }) => (
  <StyledCardItem>
    <Title>{repository.name}</Title>
    <Meta>
      {repository.language} - {moment(repository.created_at).format('DD/MM/YY')}
    </Meta>
    <Info>
      <Description>{repository.description}</Description>
      <Status>
        <StatusStars>
          <Star color="#afafaf" size="14" />
          {repository.stargazers_count}
        </StatusStars>
        <StatusForks>
          <RepoForked color="#afafaf" size="14" />
          {repository.forks_count}
        </StatusForks>
      </Status>
    </Info>
  </StyledCardItem>
);

CardItem.propTypes = {
  repository: PropTypes.instanceOf(Object),
};

CardItem.defaultProps = {
  repository: {},
};

export default CardItem;
