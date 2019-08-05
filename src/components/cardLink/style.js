import styled from 'styled-components';

export const StyledCardLink = styled.div`
  display: flex;
  cursor: pointer;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: var(--gray-scale-2);
  }
  &.link-active {
    font-weight: 600;
    border-left: 4px solid var(--primary);
  }
`;

export const Title = styled.p`
  font-size: var(--font-size-base);
  display: inline-block;
`;
