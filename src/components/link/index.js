import React from 'react';
import styled from 'styled-components';
import { At } from 'styled-icons/boxicons-regular/At';
import { Link as _Link } from 'styled-icons/boxicons-regular/Link';

import Link from './style';

const AtIcon = styled(At)`
  margin-right: 5px;
`;

const LinkIcon = styled(_Link)`
  margin-right: 5px;
`;

const ExternalLink = ({ children, type, to }) => {
  const renderLink = () => {
    if (type) {
      return type === 'email' ? `mailto:${to}` : to;
    }
  };

  return (
    <Link href={renderLink()} target="_blank">
      {type && type === 'link' ? (
        <LinkIcon width="16" />
      ) : (
        <AtIcon width="16" />
      )}
      {children}
    </Link>
  );
};

export default ExternalLink;
