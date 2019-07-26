import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  max-width: 594px;
  box-shadow: var(--shadow-medium);
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid var(--border-color);
  padding: 16px;
`;

export const CardContent = styled.div`
  padding: 0;
`;
