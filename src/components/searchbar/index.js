import React from 'react';

import { Text, Form, SearchInput, SearchButton } from './style.js';

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
        placeholder="Digite" 
        type="text" 
        onChange={onChange} />
      <SearchButton type="Submit">
        { isLoading ? 'buscando' : 'Procurar' }
      </SearchButton>
    </Form>
  )
}

export default SearchBar;
