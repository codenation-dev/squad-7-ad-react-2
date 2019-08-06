import styled from 'styled-components';
import { Container as _Container } from '../../components/grid';

export const Container = styled(_Container)`
  display: flex;
  padding-top: 130px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) { 
    padding-top: 80px;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 38px;
  }
`

export const Subtitle = styled.h2` 
  font-size: 15px;
  color: var(--gray-scale-4);
  font-weight: 500;
  margin-bottom: 70px;
  text-align: center;
  @media (max-width: 767px) { 
    margin-bottom: 40px;
  }
`