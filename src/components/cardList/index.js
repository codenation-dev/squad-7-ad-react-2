import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardItem from '../cardItem';
import MessageNotFound from '../messageNotFound';

const RepoOrder = (a, b) => {
  if (a.created_at < b.created_at) return 1;
  if (a.created_at > b.created_at) return -1;
  return 0;
};

const CardList = ({ repositories, error }) => (
  <Fragment>
    {error && <MessageNotFound />}
    {!error &&
      repositories.length > 0 &&
      repositories
        .sort(RepoOrder)
        .map(repository => (
          <CardItem key={repository.id} repository={repository} />
        ))}
  </Fragment>
);

CardList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  error: PropTypes.bool.isRequired,
};

CardList.defaultProps = {
  repositories: [],
};

export default CardList;
