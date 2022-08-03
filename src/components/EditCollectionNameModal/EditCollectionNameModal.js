/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { checkSpecialCharacters } from "../../function/checkSpecialCharacters";

import { 
    editCollectionNameModalButtons,
    editCollectionNameModalCloseButton,
    editCollectionNameModalContainer,
    editCollectionNameModalEditButton,
    editCollectionNameModalError,
    editCollectionNameModalInput,
    editCollectionNameModalLabel
} from "./styles";

const EditCollectionName = (props) => {
    const [error, setError] = useState(false);

    const editCollection = (e) => {
        e.preventDefault();
        
        const keys = Object.keys(localStorage);
        const updatedCollectionName = e.target.editCollectionName.value;
        const currentCollectionValues = localStorage.getItem(props.previousName);
        if(!keys.includes(updatedCollectionName) && !checkSpecialCharacters(updatedCollectionName)) {
            localStorage.setItem(updatedCollectionName, currentCollectionValues);
            localStorage.removeItem(props.previousName);
            window.dispatchEvent(new Event("storage"));
            
            setError(false);
            props.onVisibilityChange(false);
            props.onAlert(true);
        } else {
            setError(true);
        }
    }

    return(
        <div css={editCollectionNameModalContainer}>
            <form onSubmit={editCollection}>
                <label css={editCollectionNameModalLabel}>Input new collection name</label>
                <input name="editCollectionName" placeholder="Input here...." css={editCollectionNameModalInput}/>

                {error && 
                    <p css={editCollectionNameModalError}>
                        Collection name must be unique and not contain any special character
                    </p>
                }
            
                <section css={editCollectionNameModalButtons}>
                    <button type="button" css={editCollectionNameModalCloseButton} onClick={props.onClose}>Cancel</button>
                    <button type="submit" css={editCollectionNameModalEditButton}>Edit</button>
                </section>
            </form>
        </div>
    )
}

export default EditCollectionName;