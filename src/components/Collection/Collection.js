/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";

import AddCollectionModal from "../AddCollectionModal/AddCollectionModal";
import Alert from "../Alert/Alert";
import CollectionCard from "../CollectionCard/CollectionCard";

import { 
    collectionPageAddButton, 
    collectionPageFlexContainer,
    collectionPageFlexElement,
    collectionPageNoAnime,
    collectionPageTitle 
} from "./styles";

const Collection = () => {
    const [collections, setCollections] = useState(Object.keys(localStorage));
    const [showAddModal, setShowAddModal] = useState(false);
    const [showAddAlert, setShowAddAlert] = useState(false);

    useEffect(() => {
       const onStorage = () => {
        setCollections(Object.keys(localStorage))
       };
       window.addEventListener('storage', onStorage);
    }, []);

    const onCancelAddModal = (e) => {
        e.preventDefault();
        setShowAddModal(false);
    }

    const onClickAdd = (e) => {
        e.preventDefault();
        setShowAddModal(true);
    }

    return(
        <>
            {showAddModal && 
                <AddCollectionModal
                    onAlert={setShowAddAlert}
                    onClose={onCancelAddModal}
                    onVisibilityChange={setShowAddModal}
                />
            }

            {showAddAlert && 
                <Alert
                    actionCategory="added"
                    objectCategory="collection"
                    onClose={setShowAddAlert}
                />
            }

            <div>
                <p css={collectionPageTitle}>Collections</p>
                <button css={collectionPageAddButton} onClick={onClickAdd}>Add Collection</button>

                <div css={collectionPageFlexContainer}>
                    {collections.length ? 
                        collections.map((collection, key) => {
                            return(
                                <div css={collectionPageFlexElement}>
                                    <CollectionCard 
                                        key={key}
                                        image={JSON.parse(localStorage.getItem(collection))[0]?.coverImage.large} 
                                        name={collection}
                                    />
                                </div>
                            )
                        })
                        :
                        <p css={collectionPageNoAnime}>No collection yet</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Collection;