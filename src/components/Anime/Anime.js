/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_ANIME_LIST } from "../../queries/anime";
import AnimeCard from "../AnimeCard/AnimeCard";
import Pagination from "../Pagination/Pagination";

import { animePageTitle } from "./styles";

const Anime = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, loading, error } = useQuery(GET_ANIME_LIST, {
        variables: { "page": currentPage, "perPage": 10 }
    })
    if(loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    
    return(
        <div>
            <p css={animePageTitle}>Anime List</p>
            {!loading && 
                data.Page.media.map((anime, key) => {
                    return(
                        <AnimeCard 
                            key={key}
                            anime={anime}
                        />
                    )
                })
            }
            <Pagination 
                currentPage={currentPage}
                totalData={data.Page.pageInfo.total}
                pageSize={10}
                lastPage={data.Page.pageInfo.lastPage}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}

export default Anime;