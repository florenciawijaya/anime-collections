/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const editCollectionNameModalButtons = css`
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    @media (max-width: 350px) {
        display: block;
        text-align: center;
    }
`;

export const editCollectionNameModalCloseButton = css`
    margin-right: 0.5rem;
    padding: 0.1rem 1rem;
    background: #C58059;
    border: 1px solid white;
    border-radius: 5px;
    color: white;

    @media (max-width: 350px) {
        margin-top: 1rem;
        margin-right: 0;
        padding: 0.1rem 2rem;
    }
`;

export const editCollectionNameModalContainer = css`
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

export const editCollectionNameModalEditButton = css`
    margin-left: 0.5rem;
    padding: 0.1rem 1rem;
    background: #FFD301;
    border: 1px solid white;
    border-radius: 5px;
    color: white;

    @media (max-width: 350px) {
        margin-top: 1rem;
        margin-left: 0;
        padding: 0.1rem 2rem;
    }
`;

export const editCollectionNameModalError = css`
    font-size: 10px;
    font-style: italic;
    color: white;
`;

export const editCollectionNameModalInput = css`
    border: 1px solid #C58059;
    border-radius: 5px;    
    outline: none;
    max-width: 100%;
    padding: 0.2rem 0.3rem;
    margin-top: 1rem;
`;

export const editCollectionNameModalLabel = css`
    display: block;    
    color: white;
`;