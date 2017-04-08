import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import './index.css';

// apollo client
const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8000/graphql'
});
const client = new ApolloClient({
    networkInterface
});

const routes = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

render(routes, document.getElementById('root'));
