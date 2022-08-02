/** @jsxImportSource @emotion/react */

import { 
    removeAnimeModalButtons,
    removeAnimeModalCloseButton,
    removeAnimeModalCollectionName,
    removeAnimeModalContainer,
    removeAnimeModalRemoveButton,
    removeAnimeModalText
} from "./styles";

const RemoveAnimeFromCollection = (props) => {
    return(
        <div css={removeAnimeModalContainer}>
            <p css={removeAnimeModalText}>Remove </p>
            <p css={removeAnimeModalCollectionName}>{props.animeName}</p>
            <p css={removeAnimeModalText}>?</p>

            <section css={removeAnimeModalButtons}>
                <button css={removeAnimeModalCloseButton} onClick={props.onClose}>No</button>
                <button css={removeAnimeModalRemoveButton} onClick={props.onRemove}>Yes</button>
            </section>
        </div>
    )
}

export default RemoveAnimeFromCollection;