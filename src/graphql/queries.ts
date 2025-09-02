import { gql } from '@apollo/client';

export const GET_IDEAS = gql`
    query GetIdeas {
        Ideas {
            id
            text
            votes
        }
    }
`;