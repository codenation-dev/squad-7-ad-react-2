import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardContent as _CardContent, CardHeader, StyledCard } from '../card';
import ExternalLink from '../link';
import UserProfile from './userProfile';

const CardContent = styled(_CardContent)`
  padding: 16px;
`;

const hasEmailOrBlog = profile => profile.email || profile.blog;

const UserAbout = ({ profile }) => {
  return (
    <StyledCard>
      <CardHeader>
        <UserProfile avatarUrl={profile.avatarUrl} name={profile.username} />
      </CardHeader>
      {hasEmailOrBlog(profile) && (
        <CardContent>
          {profile.blog && (
            <ExternalLink type="link">{profile.blog}</ExternalLink>
          )}
          {profile.email && (
            <ExternalLink type="email">{profile.email}</ExternalLink>
          )}
        </CardContent>
      )}
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
