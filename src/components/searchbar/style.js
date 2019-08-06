import styled, { css } from 'styled-components'
import { Spinner4 as _Spinner } from 'styled-icons/icomoon/Spinner4';
import { Search as _Search } from 'styled-icons/boxicons-regular/Search'

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
  ${props =>
    props.internal &&
    css`
      @media (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: center;
        ${SearchButton}, ${SearchInput} {
          flex-basis: 100%;
        }
        ${SearchButton} {
          margin-top: 25px;
        }
      }
    `}
  ${props =>
    !props.internal &&
    css`
      @media (max-width: 600px) {
        margin-top: 15px;
        width: 100%;
        ${SearchButton}, ${SearchInput} {
          width: calc(100% - 40px)
        }
        ${SearchButton} {
          width: 40px;
          padding: 10px 0;
        }
        ${TextButton} {
          display: none;
        }
        ${Search} {
          display: inline-block;
        }
      }
    `}
`

export const Text = styled.span`
  font-size: 18px;
  color: #000000;
  margin-right: 8px;
  @media (max-width: 767px) {
    display: none;
  }
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

export const Search = styled(_Search)`
  display: none;
`

export const TextButton = styled.span``

