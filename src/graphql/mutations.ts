import { gql } from '@apollo/client';

export const CREATE_IDEA = gql`
    mutation CreateIdea($text: String!) {
        createIdea(text: $text) {
            id
            text
            votes
        }
    }
`;


export const VOTE_IDEA = gql`
    mutation VoteIdea($id: ID!) {
        voteIdea(id: $id) {
            id
            text
            votes
        }
    }

`;