import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import Profile from '../Profile';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default class Journal extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return(
            <Container>
                <Profile />
            </Container>
        );
    }
}
