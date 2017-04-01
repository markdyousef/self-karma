import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Container = styled.div`
    padding: 50px;
    width: 100%;
    height: 100%;

`;

class App extends Component {
  render() {
    return (
      <Container>
          <Paper />
      </Container>
    );
  }
}

export default App;
