import React from 'react';

import { Text, Form, SearchInput, SearchButton, Spinner, TextButton, Search } from './style.js';

const SearchBar = ({
  onSubmit,
  keyword,
  onChange,
  isLoading,
  text = "",
  internal = false
}) => {
  
  return (
    <Form onSubmit={onSubmit} internal={internal}>
      {text && <Text>{text}</Text>}
      <SearchInput 
        value={keyword} 
        placeholder="Digite o usuário do Github" 
        type="text" 
        onChange={onChange} />
      <SearchButton type="Submit">
        <Search height="18" />
        <TextButton>
          { isLoading ? <Spinner height="14" /> : 'Procurar' }
        </TextButton>
      </SearchButton>
    </Form>
  )
}

export default SearchBar;
