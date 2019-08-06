import styled from 'styled-components';
import { Container as _Container } from '../../components/grid';

export const Container = styled(_Container)`
  display: flex;
  padding-top: 130px;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  font-weight: 500;
`

export const Subtitle = styled.h2` 
  font-size: 15px;
  color: var(--gray-scale-4);
  font-weight: 500;
  margin-bottom: 70px;
`