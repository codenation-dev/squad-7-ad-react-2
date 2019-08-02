import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background-color: var(--white);
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  float: left;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: var(--font-size-large);
  font-weight: 400;
  margin: 14px 0;
  float: left;
`;
