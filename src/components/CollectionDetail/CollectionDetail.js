/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Alert from "../Alert/Alert";
import AnimeCard from "../AnimeCard/AnimeCard";
import RemoveAnimeFromCollectionModal from "../RemoveAnimeFromCollectionModal/RemoveAnimeFromCollectionModal";

import { 
    collectionDetailName,
    collectionDetailNoAnime,
    collectionDetailRemoveButton
} from "./styles";

const CollectionDetail = () => {
    const { name } = useParams();

    const [animes, setAnimes] = useState(JSON.parse(localStorage.getItem(name)));
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showRemoveAlert, setShowRemoveAlert] = useState(false);
    const [removedAnime, setRemovedAnime] = useState("");

    useEffect(() => {
        const onStorage = () => {
            setAnimes(JSON.parse(localStorage.getItem(name)));
        }
        window.addEventListener('storage', onStorage);
    });

    const onCloseRemoveModal = (e) => {
        e.preventDefault();
        setShowRemoveModal(false);
    }

    const onRemoveClick = anime => e => {
        e.preventDefault();
        setShowRemoveModal(true);
        setRemovedAnime(anime.title.romaji);
    };

    const removeAnime = () => {
        const removed = animes.splice(animes.findIndex(anime => anime.title.romaji === removedAnime), 1)
        localStorage.setItem(name, JSON.stringify(animes));
        window.dispatchEvent(new Event("storage"));
        setShowRemoveModal(false);
        setShowRemoveAlert(true);
    }

    return(
        <>
            {showRemoveModal && 
                <RemoveAnimeFromCollectionModal
                    animeName={removedAnime}
                    onClose={onCloseRemoveModal}
                    onRemove={removeAnime}
                />
            }

            {showRemoveAlert && 
                <Alert
                    actionCategory="removed"
                    objectCategory="anime"
                    onClose={setShowRemoveAlert}
                />
            }

            <div>
                <p css={collectionDetailName}>{name}</p>
                {animes.length ? 
                    animes.map((anime, key) => {
                        return(
                            <div>
                                <AnimeCard 
                                    key={key} 
                                    anime={anime}
                                />

                                <button css={collectionDetailRemoveButton} onClick={onRemoveClick(anime)}>Remove</button>
                            </div>
                        )
                    })
                    :
                    <p css={collectionDetailNoAnime}>No anime yet</p>
                }
            </div>
        </>
    )
}

export default CollectionDetail;