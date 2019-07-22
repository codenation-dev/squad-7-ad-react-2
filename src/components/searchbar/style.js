import styled from 'styled-components'
import { Spinner4 as _Spinner } from 'styled-icons/icomoon/Spinner4';

export const Spinner = styled(_Spinner)`
  animation: rotate 2s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export const Form = styled.form` 
  display: flex;
  align-items: center;
`

export const Text = styled.span`
  font-size: 18px;
  color: #000000;
  margin-right: 8px;
`

export const SearchInput = styled.input`
  font-size: 18px;
  padding: 10px 15px;
  border: 1px solid #dadada;
  min-width: 245px;
`

export const SearchButton = styled.button`
  background: #1EBEAA;
  border: 1px solid #1EBEAA;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  width: 150px;
`

