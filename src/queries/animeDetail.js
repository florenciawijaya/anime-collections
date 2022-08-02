import { gql } from '@apollo/client';

export const GET_ANIME_DETAIL = gql`
    query ($id: Int) {
        Media(id: $id) {
            id
            title {
                romaji
                english
                native
            }
            description
            episodes
            genres
            averageScore
            coverImage {
                large
            }
        }
    }
`;