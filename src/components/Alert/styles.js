/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const alertContainer = (category) => css`
    border: 1px solid #EBDCB2;
    border-radius: 5px;
    position: fixed;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    padding: 0.5rem;
    word-wrap: break-word;
    z-index: 2;

    ${category === "removed" && 
        `background-color: #E63946`
    }

    ${category === "edited" && 
        `background-color: #FFD301`
    }

    ${category === "added" && 
        `background-color: #48BF91`
    }
`;

export const alertText = css`
    font-size: 10px;
    color: white;
`;