/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const animeCardCategoryTitle = css`
    display: none;

    @media (min-width: 480px) {
        display: block;
        font-style: italic;
    }
`;

export const animeCardContainer = css`
    border: 1px solid #EBDCB2;
    border-radius: 10px;
    background-color: #FFFADE;
    margin: 20px 30px 0 30px;
    padding: 20px;
    text-align: center;
`;

export const animeContent = css`
    display: flex;
`;

export const animeCardImage = css`
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
`;

export const animeCardLink = css`
    text-decoration: none;
    color: #75868E;
`;

export const animeCardTitle = css`
    margin-bottom: 10px;
    font-weight: 500;
`;

export const animeCardTitleSection = css`
    padding-left: 20px;
    margin: auto;
`;