import styled from 'styled-components'
import { Container as _Container } from '../grid';

export const Container = styled(_Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  @media(max-width: 600px) {
    flex-direction: column;
    padding: 15px;
    height: auto;
  }
`;

export const Nav = styled.div` 
  border-bottom: 2px solid #F0F0F0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
`

export const Logo = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  color: #000000;
  font-weight: 600;
  border: 5px solid #333;
  padding: 5px 10px;
`

