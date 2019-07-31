import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Title, Wrapper } from './style';

const UserProfile = ({ name, avatarUrl }) => {
  return (
    <Wrapper>
      <Avatar src={avatarUrl} />
      <Title>{name}</Title>
    </Wrapper>
  );
};

UserProfile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
};

UserProfile.defaultProps = {
  avatarUrl: 'https://avatars2.githubusercontent.com/u/42302?v=4',
  name: '',
};

export default UserProfile;
