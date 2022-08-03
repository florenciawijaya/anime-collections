/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { alertContainer, alertText } from "./styles";

const Alert = (props) => {
    useEffect(() => {
        let timer = setTimeout(() => props.onClose(false), 2000);

        return() => {
            clearTimeout(timer);
        }
    }, []);

    return(
        <>
            <div css={alertContainer(props.actionCategory)}>
                <p css={alertText}>You have successfully {props.actionCategory} a {props.objectCategory}</p>
            </div>
        </>
    )
}

export default Alert;