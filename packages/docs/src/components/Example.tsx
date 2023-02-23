import { Row, Col, Container } from '@sui/core';
import React from 'react';

export default ({ children }) => (
  <Container mb='1em' css={{ border: '1px solid var(--ifm-color-secondary)', borderRadius: '8px' }}>
    <Row justify='center' pa='1em' gap='1em'>
      {children}
    </Row>
  </Container>
);
