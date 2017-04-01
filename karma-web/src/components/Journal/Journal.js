import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper/Paper';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const paperStyle = {
    height: '80%',
    width: '80%',
    maxWidth: '400px',
    textAlign: 'center',
}

export default class Journal extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return(
            <Container>
                <Paper style={paperStyle} zDepth={1} />
            </Container>
        );
    }
}
