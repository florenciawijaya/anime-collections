/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { checkSpecialCharacters } from "../../function/checkSpecialCharacters";
import { 
    addCollectionModalAddButton,
    addCollectionModalButtons,
    addCollectionModalCloseButton,
    addCollectionModalContainer, 
    addCollectionModalError,
    addCollectionModalInput,
    addCollectionModalLabel
} from "./styles";

const AddCollectionModal = (props) => {
    const [error, setError] = useState(false);

    const addCollection = (e) => {
        e.preventDefault()
        const newCollection = e.target.addCollectionInput.value;

        if(!Object.keys(localStorage).includes(newCollection) && !checkSpecialCharacters(newCollection)) {
            localStorage.setItem(newCollection, JSON.stringify([]))
            window.dispatchEvent(new Event("storage"));

            setError(false);
            props.onVisibilityChange(false);
            props.onAlert(true);
        } else {
            setError(true);
        }
    }

    return(
        <div css={addCollectionModalContainer}>
            <form onSubmit={addCollection}>
                <label css={addCollectionModalLabel}>Add new collection name</label>
                <input name="addCollectionInput" placeholder="Input here...." css={addCollectionModalInput}/>

                {error && 
                    <p css={addCollectionModalError}>
                        Collection name must be unique and not contain any special character
                    </p>
                }

                <section css={addCollectionModalButtons}>
                    <button type="button" css={addCollectionModalCloseButton} onClick={props.onClose}>Cancel</button>
                    <button type="submit" css={addCollectionModalAddButton}>Add</button>
                </section>
            </form>
        </div>
    )
}

export default AddCollectionModal;