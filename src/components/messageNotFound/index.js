import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import { StyledMessage, Header, Text, Content } from './style';
import SearchBar from '../searchbar';

class MessageNotFound extends Component {
  state = {
    username: '',
  };

  setUsername = value => {
    this.setState({ username: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    const { getRepositoriesRequest } = this.props;
    getRepositoriesRequest(username);
  };

  render() {
    const { header, text } = this.props;
    const { username } = this.state;
    return (
      <StyledMessage>
        <Header>{header}</Header>
        <Content>
          <Text>{text}</Text>
          <SearchBar
            onSubmit={this.handleSubmit}
            keyword={username}
            onChange={e => this.setUsername(e.target.value)}
            isLoading={false}
            text="github.com/"
          />
        </Content>
      </StyledMessage>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(MessageNotFound);

MessageNotFound.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  getRepositoriesRequest: PropTypes.func.isRequired,
};

MessageNotFound.defaultProps = {
  header: 'OOPS...',
  text:
    'Não encontramos o usuário que você está buscando. Deseja realizar uma nova pesquisa?',
};
