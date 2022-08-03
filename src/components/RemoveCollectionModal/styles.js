/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const removeCollectionModalButtons = css`
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    @media (max-width: 350px) {
        display: block;
        text-align: center;
    }
`;

export const removeCollectionModalCloseButton = css`
    margin-right: 0.5rem;
    padding: 0.1rem 1rem;
    background: #C58059;
    border: 1px solid white;
    border-radius: 5px;
    color: white;

    @media (max-width: 350px) {
        margin-top: 1rem;
        margin-right: 0;
        padding: 0.1rem 2.5rem;
    }
`;

export const removeCollectionModalCollectionName = css`
    font-style: italic;
    color: white;
    display: inline;
`;

export const removeCollectionModalContainer = css`
    background-color: #C58059;
    border: 1px solid #EBDCB2;
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    padding: 1rem;
    word-wrap: break-word;
    z-index: 2;
`;

export const removeCollectionModalRemoveButton = css`
    margin-left: 0.5rem;
    padding: 0.1rem 1rem;
    background: #E63946;
    border: 1px solid white;
    border-radius: 5px;
    color: white;

    @media (max-width: 350px) {
        margin-top: 1rem;
        margin-left: 0;
        padding: 0.1rem 2.5rem;
    }
`;

export const removeCollectionModalText = css`
    color: white;
    display: inline;
`;
