import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardContent as _CardContent, CardHeader, StyledCard } from '../card';
import ExternalLink from '../link';
import UserProfile from './userProfile';

const CardContent = styled(_CardContent)`
  padding: 16px;
`;

const UserAbout = ({ profile }) => {
  return (
    <StyledCard>
      <CardHeader>
        <UserProfile avatarUrl={profile.avatarUrl} name={profile.name} />
      </CardHeader>

      <CardContent>
        <ExternalLink type="link">github.com</ExternalLink>
        <ExternalLink type="email">user@gmail.com</ExternalLink>
      </CardContent>
    </StyledCard>
  );
};

UserAbout.propTypes = {
  profile: PropTypes.instanceOf(Object),
};

UserAbout.defaultProps = {
  profile: {},
};

export default UserAbout;
