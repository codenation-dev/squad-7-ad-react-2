import styled from 'styled-components';
import { Container as _Container } from '../../components/grid';

export const Container = styled(_Container)`
  margin-top: 16px;
`;

export const WrapperLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(255,255,255,0.9);
`