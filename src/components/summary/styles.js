import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: var(--white);
  border: 1px solid var(--gray-scale-2);
  border-top-width: 0;
  padding: 8px;
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 80px;
  padding: 8px;
  width: 33%;
`;

export const Count = styled.p`
  color: var(--gray-scale-4);
  font-size: var(--font-size-medium);
  font-weight: 500;
  margin-left: 0.5px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
