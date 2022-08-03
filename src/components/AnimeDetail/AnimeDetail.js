/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import Alert from "../Alert/Alert";
import AddAnimeToCollectionModal from "../AddAnimeToCollectionModal/AddAnimeToCollectionModal";
import { GET_ANIME_DETAIL } from "../../queries/animeDetail";
import { 
    addToCollectionButton,
    animeDetailDescription,
    animeDetailImage, 
    animeDetailLoading,
    animeDetailSectionName,
    animeDetailTable, 
    animeDetailTableBody, 
    animeDetailTableDetail, 
    animeDetailTableHead, 
    animeDetailTableHeader, 
    animeDetailTableLink, 
    animeDetailTableRow,
    animeDetailTitle
} from "./styles";

const AnimeDetail = () => {
    const { id } = useParams();
    const [collections, setCollections] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showAddAlert, setShowAddAlert] = useState(false);

    useEffect(() => {
        const res = getCollections();
        setCollections(res);
    }, []);

    useEffect(() => {
        const onStorage = () => {
            const res = getCollections();
            setCollections(res);
        }
        window.addEventListener('storage', onStorage);
    });

    const getCollections = () => {
        const keys = Object.keys(localStorage);
        const res = []
        for(let key of keys) {
            const values = JSON.parse(localStorage.getItem(key)); 
            if(values.some(anime => anime.id === parseInt(id))) res.push(key);
        }
        return res;
    }

    const onCancelAdd = (e) => {
        e.preventDefault();
        setShowAddModal(false);
    }

    const onAddClick = (e) => {
        e.preventDefault();
        setShowAddModal(true);
    }

    const { data, loading, error } = useQuery(GET_ANIME_DETAIL, {
        variables: { "id": id }
    })
    if(loading) return <p css={animeDetailLoading}>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return(
        <>
            {showAddModal && 
                <AddAnimeToCollectionModal 
                    anime={data.Media}
                    existingCollections={collections}
                    onAlert={setShowAddAlert}
                    onCancel={onCancelAdd}
                    onChangeVisibility={setShowAddModal}
                />
            }

            {showAddAlert && 
                <Alert
                    actionCategory="added"
                    objectCategory="anime"
                    onClose={setShowAddAlert}
                />
            }

            {!loading && 
                <>
                    <p css={animeDetailTitle}>{data.Media.title.romaji}</p>
                    <button css={addToCollectionButton} onClick={onAddClick}>Add to Collection</button>
                    <img src={data.Media.coverImage.large} css={animeDetailImage}/>

                    <section>
                        <p css={animeDetailSectionName}>Information</p>
                        <table css={animeDetailTable}>
                            <thead css={animeDetailTableHead}>
                                <tr css={animeDetailTableRow}>
                                    <th css={animeDetailTableHeader}>Native Title</th>
                                    <th css={animeDetailTableHeader}>English Title</th>
                                    <th css={animeDetailTableHeader}>Genres</th>
                                    <th css={animeDetailTableHeader}>Episodes</th>
                                    <th css={animeDetailTableHeader}>Average Score</th>
                                    <th css={animeDetailTableHeader}>Collections</th>
                                </tr>
                            </thead>

                            <tbody css={animeDetailTableBody}>
                                <tr css={animeDetailTableRow}>
                                    <td css={animeDetailTableDetail}>{data.Media.title.native}</td>
                                    <td css={animeDetailTableDetail}>{data.Media.title.english}</td>
                                    <td css={animeDetailTableDetail}>
                                        {data.Media.genres.map((genre, key) => {
                                            return(
                                                <p key={key}>{genre}</p>
                                            )
                                        })}
                                    </td>
                                    <td css={animeDetailTableDetail}>{data.Media.episodes}</td>
                                    <td css={animeDetailTableDetail}>{data.Media.averageScore}</td>
                                    <td css={animeDetailTableDetail}>
                                        {collections.length ? 
                                            collections.map((collection, key) => {
                                                return(
                                                    <p css={animeDetailTableLink}><Link to={`/collection/${collection}`} key={key} css={animeDetailTableLink}>{collection}</Link></p>
                                                )})
                                            :
                                            <p>-</p>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <p css={animeDetailSectionName}>Description</p>
                        <p css={animeDetailDescription}>{data.Media.description}</p>
                    </section>
                </>
            }
        </>
    )
}

export default AnimeDetail;