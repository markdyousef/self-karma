import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardTitle } from 'material-ui/Card'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const Container = styled.section`
    width: 80%;
    height: 100%;
`;

const InnerContainer = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    height: 400px;
`;

const Title = styled.span`
    font-size: 18px;
`;

const Close = ({ onClick }) => (
    <IconButton><NavigationClose /></IconButton>
);

const Save = ({ onClick }) => (
    <FlatButton label="Save" />
);


export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            heroes: [],
            quotes: [],
            books: [],
            pictures: [],
            isEdit: false,
            hasChanged: false
        }
    }
    handleTouchTap = () => {
        const { isEdit, hasChanged } = this.state;

        if (hasChanged) return;

        this.setState({ isEdit: !isEdit })


    }
    handleChange = (key, value) => {
        const states = Object.keys(this.state);

        const field = states.findIndex(fieldKey => fieldKey === key)

        if (!!field) return;

        let newState = Object.assign({}, this.state);
        newState[key] = value;
        this.setState(newState)
    }
    render() {
        const { name, isEdit, hasChanged } = this.state;
        return(
            <Container>
                <Card>
                    <AppBar
                        title={<Title>Cool</Title>}
                        onTitleTouchTap={this.handleTouchTap}
                        iconElementLeft={(isEdit) ? <Close /> : null }
                        iconElementRight={(isEdit && hasChanged) ? <Save /> : null}
                    />
                    <InnerContainer>
                        <TextField
                            value={name}
                            onChange={event => this.handleChange('name', event.target.value)}
                            id='name'
                            style={{ width: '80%' }}
                            hintText="Name"
                        />
                    </InnerContainer>
                </Card>
            </Container>
        );
    }
}
