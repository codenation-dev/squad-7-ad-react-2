import styled from 'styled-components';

export const StyledMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: var(--white);
  padding: 50px 48px;
  margin: 30px auto;
  max-width: 930px;
  border: 1px solid var(--gray-scale-2);
  border-radius: 2px;
`;

export const Header = styled.h1`
  font-size: 64px;
  margin-right: 20px;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 395px;
`;

export const Text = styled.div`
  font-size: var(--font-size-base);
  color: var(--gray-scale-4);
  margin-bottom: 10px;
`;
