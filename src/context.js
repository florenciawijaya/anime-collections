import React, { createContext } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ANIME_LIST } from './queries/anime';

export const AnimeContext = createContext();

const AnimeContextProvider = ({ children }) => {
    const { data, loading, error } = useQuery(GET_ANIME_LIST, {
        variables: { "page": 1, "perPage": 10 }
    })

    return (
        <AnimeContext.Provider value={{ animeData: data, animeLoading: loading, errorLoading: error }}>
            {children}
        </AnimeContext.Provider>
    )
}

export default AnimeContextProvider;