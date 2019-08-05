import React from 'react';
import { StyledCardLink, Title } from './style';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight';

const CardLink = ({title, isActive, handleClick}) => (
  <StyledCardLink className={isActive ? 'link-active' : ''} onClick={() => handleClick(title)}>
    <Title># {title}</Title>
    <KeyboardArrowRight width="24" />
  </StyledCardLink>
);

export default CardLink;
