import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../searchbar';

import { StyledMessage, Header, Text, Content } from './style';

const MessageNotFound = ({ header, text }) => {
  return (
    <StyledMessage>
      <Header>{header}</Header>
      <Content>
        <Text>{text}</Text>
        <SearchBar />
      </Content>
    </StyledMessage>
  );
};

MessageNotFound.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

MessageNotFound.defaultProps = {
  header: 'OOPS...',
  text:
    'Não encontramos o usuário que você está buscando. Deseja realizar uma nova pesquisa?',
};

export default MessageNotFound;
