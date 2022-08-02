/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";

import AddCollectionModal from "../AddCollectionModal/AddCollectionModal";
import CollectionCard from "../CollectionCard/CollectionCard";

import { 
    collectionPageAddButton, 
    collectionPageTitle 
} from "./styles";

const Collection = () => {
    const [collections, setCollections] = useState(Object.keys(localStorage));
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
       const onStorage = () => {
        setCollections(Object.keys(localStorage))
       };
       window.addEventListener('storage', onStorage);
    }, [])

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
                    onCancel={onCancelAddModal}
                    onVisibilityChange={setShowAddModal}
                />
            }

            <div>
                <p css={collectionPageTitle}>Collections</p>
                <button css={collectionPageAddButton} onClick={onClickAdd}>Add Collection</button>

                {collections.map((collection, key) => {
                    return(
                        <>
                            <CollectionCard 
                                key={key}
                                image={JSON.parse(localStorage.getItem(collection))[0]?.coverImage.large} 
                                name={collection}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Collection;