/** @jsxImportSource @emotion/react */

import { checkSpecialCharacters } from "../../function/checkSpecialCharacters";

import { 
    editCollectionNameModalButtons,
    editCollectionNameModalCloseButton,
    editCollectionNameModalContainer,
    editCollectionNameModalEditButton,
    editCollectionNameModalInput,
    editCollectionNameModalLabel
} from "./styles";

const EditCollectionName = (props) => {
    const editCollection = (e) => {
        const keys = Object.keys(localStorage);
        const updatedCollectionName = e.target.editCollectionName.value;
        const currentCollectionValues = localStorage.getItem(props.previousName);
        if(!keys.includes(updatedCollectionName) && !checkSpecialCharacters(updatedCollectionName)) {
            localStorage.setItem(updatedCollectionName, currentCollectionValues);
            localStorage.removeItem(props.previousName);
            window.dispatchEvent(new Event("storage"));
        }

        props.onVisibilityChange(false);
    }

    return(
        <div css={editCollectionNameModalContainer}>
            <form onSubmit={editCollection}>
                <label css={editCollectionNameModalLabel}>Input new collection name</label>
                <input name="editCollectionName" placeholder="Input here...." css={editCollectionNameModalInput}/>
            
                <section css={editCollectionNameModalButtons}>
                    <button type="button" css={editCollectionNameModalCloseButton} onClick={props.onClose}>Cancel</button>
                    <button type="submit" css={editCollectionNameModalEditButton}>Edit</button>
                </section>
            </form>
        </div>
    )
}

export default EditCollectionName;