/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const collectionPageAddButton = css`
    padding: 10px 15px;
    margin-left: 10px;
    border: 1px solid #C58059;
    border-radius: 10px;
    background-color: #48BF91;
    color: white;
`;

export const collectionPageFlexContainer = css`
    @media (min-width: 480px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const collectionPageFlexElement = css`
    @media (min-width: 480px) {
        flex-basis: 50%;
    }
`;

export const collectionPageNoAnime = css`
    font-style: italic;
    margin: 10px;
`;

export const collectionPageTitle = css`
    font-size: 30px;
    font-weight: 700;
    color: #C58059;
    margin: 10px;
`;