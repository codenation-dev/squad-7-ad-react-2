import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ fluid }) => (fluid ? '100%' : '960px')};
  min-width: 960px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    clear: both;
  }
`;

export const Column = styled.div`
  float: left;
  grid-column: span ${({ span }) => span || '1'};
  min-height: 1px;
  box-sizing: border-box;
`;
