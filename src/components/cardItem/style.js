import styled from 'styled-components';

export const StyledCardItem = styled.div`
  transition: all 0.3s;
  padding: 16px;
  border-bottom: 1px solid var(--border-color);
  &&:hover {
    background: var(--white);
    box-shadow: var(--shadow-light);
    transform: scale(1.02);
    z-index: 10;
  }
  &:last-child {
    border: none;
  }
`;

export const Title = styled.div`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Meta = styled.div`
  color: var(--gray-scale-4);
  font-size: var(--font-size-small);
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Language = styled.span`
  &:after {
    content: '•';
    margin: 0px 4px;
  }
`;

export const StartDate = styled.span`
`;

export const Info = styled.div`
  color: var(--gray-scale-4);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: var(--font-size-medium);
  font-weight: normal;
  @media only screen and (min-width: 768px) {
    align-items: flex-end;
    flex-wrap: nowrap;
  }
`;
export const Description = styled.div`
  margin-bottom: 5px;
  @media only screen and (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

export const Status = styled.div`
  display: flex;
`;

export const StatusStars = styled.div`
  display: flex;
`;

export const StatusForks = styled.div`
  display: flex;
  margin-left: 12px;
`;
