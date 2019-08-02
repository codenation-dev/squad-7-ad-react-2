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
            <Count>{item.count}</Count>
            <Repo color="#afafaf" size="14" />
          </Info>
        </SummaryItem>
      ))}
    </Container>
  );
};

export default Summary;
