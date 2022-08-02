import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
            }
            media(type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                }
                coverImage {
                    large
                }
            }
        }
    }
`;