import React from 'react';

import moment from 'moment';

// import { Container } from './styles';

const Repository = ({
  name,
  description,
  language,
  created_at: createdAt,
  stargazers_count: stars,
  forks_count: forks,
}) => (
  <div>
    <h2>{name}</h2>
    <p>
      {language} - {moment(createdAt).format('DD/MM/YY')}
    </p>
    <h3>{description}</h3>
    <h3>{stars} Stars</h3>
    <h3>{forks} Forks</h3>
  </div>
);

export default Repository;
