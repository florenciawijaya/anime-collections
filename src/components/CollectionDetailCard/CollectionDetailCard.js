/** @jsxImportSource @emotion/react */

import { useState } from "react";

import AnimeCard from "../AnimeCard/AnimeCard";

const CollectionDetailCard = (props) => {
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    const onCloseRemoveModal = (e) => {
        e.preventDefault();
        setShowRemoveModal(false);
    }

    const onRemoveClick = (e) => {
        e.preventDefault();
        setShowRemoveModal(true);
    };

    const removeAnime = (animeName) => {
        const removed = props.animes.splice(animes.findIndex(anime => anime.title.romaji === animeName), 1)
        localStorage.setItem(name, JSON.stringify(animes));
        window.dispatchEvent(new Event("storage"));
        setShowRemoveModal(false);
    }

    return(
        <>
            <AnimeCard anime={props.anime}/>
            <button css={collectionDetailRemoveButton} onClick={onRemoveClick}>Remove</button>
        </>
    )
}

export default CollectionDetailCard;