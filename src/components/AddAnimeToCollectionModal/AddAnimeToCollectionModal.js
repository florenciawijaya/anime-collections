/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";

import { checkSpecialCharacters } from "../../function/checkSpecialCharacters";
import { 
    addToCollectionModalAddButton,
    addToCollectionModalButtons,
    addToCollectionModalCheckboxesSection,
    addToCollectionModalCheckboxLabel,
    addToCollectionModalCloseButton,
    addToCollectionModalContainer,
    addToCollectionModalError,
    addToCollectionModalInput,
    addToCollectionModalInputLabel
} from "./styles";

const AddToCollectionModal = (props) => {
    const [availableCollections, setAvailableCollections] = useState([]);
    const [checked, setChecked] = useState([]);
    const [error, setError] = useState(false);

    const getAvailableCollections = () => {
        const res = Object.keys(localStorage).filter(coll => !props.existingCollections.includes(coll))
        return res;
    }

    const handleCheckedChange = (e) => {
        let checkedList = [...checked];
        if(e.target.checked) {
            checkedList = [...checked, e.target.value];
        } else {
            checkedList.splice(checked.indexOf(e.target.value), 1);
        }

        setChecked(checkedList);
    }

    const addAnimeToCollection = (e) => {
        e.preventDefault();
        const newCollection = e.target.inputNewCollection.value;

        if(checked.length) {
            for(let collection of checked) {
                const selectedCollectionValues = JSON.parse(localStorage.getItem(collection));
                selectedCollectionValues.push(props.anime);
                localStorage.setItem(collection, JSON.stringify(selectedCollectionValues));
                window.dispatchEvent(new Event("storage"));

                setError(false);
                props.onChangeVisibility(false);
                props.onAlert(true);
            }
        }
        
        if(newCollection && !Object.keys(localStorage).includes(newCollection) && !checkSpecialCharacters(newCollection)) {
            const value = [props.anime];
            localStorage.setItem(newCollection, JSON.stringify(value));
            window.dispatchEvent(new Event("storage"));

            props.onChangeVisibility(false);
            props.onAlert(true);
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        const res = getAvailableCollections();
        setAvailableCollections(res);
    }, []);

    return(
        <div css={addToCollectionModalContainer}>
            <form onSubmit={addAnimeToCollection}>
                <section css={addToCollectionModalCheckboxesSection}>
                    {availableCollections.map((collection, key) => {
                        return(
                            <div>
                                <input type="checkbox" value={collection} onChange={handleCheckedChange}/>
                                <label css={addToCollectionModalCheckboxLabel}>{collection}</label>
                            </div>
                        )
                    })}
                </section>
                
                <section>
                    <label css={addToCollectionModalInputLabel}>If collection is new</label>
                    <input css={addToCollectionModalInput} name="inputNewCollection" placeholder="Input here...."/>
                    {error && 
                        <p css={addToCollectionModalError}>
                            Collection name must be unique and not contain any special character
                        </p>
                    }
                </section>

                <section css={addToCollectionModalButtons}>
                    <button css={addToCollectionModalCloseButton} onClick={props.onCancel}>Cancel</button>
                    <button type="submit" css={addToCollectionModalAddButton}>Add</button>
                </section>
            </form>
        </div>
    )
}

export default AddToCollectionModal;