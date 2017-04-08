import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Profile from '../components/Profile';

const getProfile = gql`
    query profile($id: String) {
        profile(id: $id) {
            id
            name
            description
        }
    }
`;

export default compose(
    graphql(getProfile, {
        options: { variables: { id: '1' }}
    })
)(Profile);
