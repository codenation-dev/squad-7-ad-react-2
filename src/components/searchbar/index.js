import React from 'react';

import { Text, Form, SearchInput, SearchButton, Spinner } from './style.js';

const SearchBar = ({
  onSubmit,
  keyword,
  onChange,
  isLoading
}) => {
  
  return (
    <Form onSubmit={onSubmit}>
      <Text>github.com/</Text>
      <SearchInput 
        value={keyword} 
        placeholder="Digite o usuário do Github" 
        type="text" 
        onChange={onChange} />
      <SearchButton type="Submit">
        { isLoading ? <Spinner height="14" /> : 'Procurar' }
      </SearchButton>
    </Form>
  )
}

export default SearchBar;
