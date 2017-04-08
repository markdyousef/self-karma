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
    max-width: 400px;
`;

const Title = styled.span`
    font-size: 18px;
`;

const Close = ({ onClick }) => (
    <IconButton onClick={onClick}><NavigationClose /></IconButton>
);

const Save = ({ onClick }) => (
    <FlatButton label="Save" />
);


export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            initialState: {},
            name: '',
            heroes: [],
            quotes: [],
            books: [],
            pictures: [],
            isEdit: false,
            hasChanged: false
        }
    }
    componentDidMount() {
        this.setState({ initialState: this.state });
    }
    handleTouchTap = () => {
        const { isEdit, hasChanged } = this.state;

        if (hasChanged) return this.setState({ hasChanged: true});

        this.setState({ isEdit: !isEdit })


    }
    handleChange = (key, value) => {
        const states = Object.keys(this.state);

        const field = states.findIndex(fieldKey => fieldKey === key)

        if (!!field) return;

        let newState = Object.assign({}, this.state);
        newState[key] = value;
        newState.hasChanged = true;
        this.setState(newState)
    }
    onClose = () => {
        const { initialState } = this.state;
        this.setState(initialState);
    }
    render() {
        const { name, isEdit, hasChanged } = this.state;
        console.log(this.props);
        return(
            <Container>
                <Card>
                    <AppBar
                        title={<Title>Cool</Title>}
                        onTitleTouchTap={this.handleTouchTap}
                        iconElementLeft={(isEdit) ? <Close onClick={this.onClose} /> : null }
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
