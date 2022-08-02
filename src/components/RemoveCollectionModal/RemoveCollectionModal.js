/** @jsxImportSource @emotion/react */

import { 
    removeCollectionModalButtons,
    removeCollectionModalCloseButton,
    removeCollectionModalCollectionName,
    removeCollectionModalContainer, 
    removeCollectionModalRemoveButton,
    removeCollectionModalText,
} from "./styles";

const RemoveCollectionModal = (props) => {
    return(
        <div css={removeCollectionModalContainer}>
            <p css={removeCollectionModalText}>Remove </p>
            <p css={removeCollectionModalCollectionName}>{props.collectionName}</p>
            <p css={removeCollectionModalText}>?</p>

            <section css={removeCollectionModalButtons}>
                <button css={removeCollectionModalCloseButton} onClick={props.onClose}>No</button>
                <button css={removeCollectionModalRemoveButton} onClick={props.onRemove}>Yes</button>
            </section>
        </div>
    )
}

export default RemoveCollectionModal;