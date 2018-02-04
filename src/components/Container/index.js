import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
`;

export default ({ children }) => <Container>{children}</Container>;
