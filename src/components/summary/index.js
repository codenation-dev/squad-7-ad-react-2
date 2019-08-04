import React from 'react';
import { Repo } from 'styled-icons/octicons/Repo';

import { Container, SummaryItem, Count, Info } from './styles';

const Summary = ({ summary }) => {
  return (
    <Container>
      {summary.map(item => (
        <SummaryItem key={item.year}>
          {item.year}
          <Info>
            <Repo color="#afafaf" size="14" />
            <Count>{item.count}</Count>
          </Info>
        </SummaryItem>
      ))}
    </Container>
  );
};

export default Summary;
