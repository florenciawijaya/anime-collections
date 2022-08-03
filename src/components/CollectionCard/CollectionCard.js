/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Link } from "react-router-dom";

import Alert from "../Alert/Alert";
import EditCollectionNameModal from "../EditCollectionNameModal/EditCollectionNameModal";
import RemoveCollectionModal from "../RemoveCollectionModal/RemoveCollectionModal";

import { 
    collectionCardButtons,
    collectionCardContainer,
    collectionCardContent,
    collectionCardEditButton,
    collectionCardImage,
    collectionCardLink,
    collectionCardName,
    collectionCardRemoveButton
} from "./styles";

const CollectionCard = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showEditAlert, setShowEditAlert] = useState(false);
    const [showRemoveAlert, setShowRemoveAlert] = useState(false);

    const onEditClick = (e) => {
        e.preventDefault();
        setShowEditModal(true);
    }

    const onRemoveClick = (e) => {
        e.preventDefault();
        setShowRemoveModal(true);
    }

    const onCloseEditModal = () => {
        setShowEditModal(false);
    }

    const onCloseRemoveModal = () => {
        setShowRemoveModal(false);
    };

    const removeCollection = () => {
        localStorage.removeItem(props.name);
        window.dispatchEvent(new Event("storage"));
        setShowRemoveModal(false);
        setShowRemoveAlert(true);
    }

    return(
        <>
            {showEditModal && 
                <EditCollectionNameModal
                    previousName={props.name}
                    onAlert={setShowEditAlert}
                    onClose={onCloseEditModal}
                    onVisibilityChange={setShowEditModal}
                />
            }
            {showRemoveModal && 
                <RemoveCollectionModal 
                    collectionName={props.name} 
                    onClose={onCloseRemoveModal}
                    onRemove={removeCollection}
                />
            }

            {showEditAlert && 
                <Alert 
                    actionCategory="edited"
                    objectCategory="collection"
                    onClose={setShowEditAlert}
                />
            }
            {showRemoveAlert && 
                <Alert 
                    actionCategory="removed"
                    objectCategory="collection"
                    onClose={setShowRemoveAlert}
                />
            }
            
            <div css={collectionCardContainer}>
                <Link to={`/collection/${props.name}`} css={collectionCardLink}>
                    <section css={collectionCardContent}>
                        <img src={props.image || "https://via.placeholder.com/300x400.png?text=Default+image"} css={collectionCardImage}/>
                        <p css={collectionCardName}>{props.name}</p>
                    </section>
                </Link>

                <section css={collectionCardButtons}>
                    <button css={collectionCardEditButton} onClick={onEditClick}>Edit</button>
                    <button css={collectionCardRemoveButton} onClick={onRemoveClick}>Remove</button>
                </section>
            </div>
        </>
    )
}

export default CollectionCard;