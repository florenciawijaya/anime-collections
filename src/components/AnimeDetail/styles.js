/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const addToCollectionButton = css`
    padding: 10px 15px;
    margin-left: 10px;
    border: 1px solid #C58059;
    border-radius: 10px;
    background-color: #48BF91;
    color: white;
`;

export const animeDetailDescription = css`
    color: #75868E;
    margin: 0 15px 10px 15px;
`;

export const animeDetailImage = css`
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
    display: block;
    margin: auto;
    margin-top: 20px;
`;

export const animeDetailLoading = css`
    font-style: italic;
    margin: 10px;
`;

export const animeDetailImageDiv = css`
    margin: auto;
`;

export const animeDetailSectionName = css`
    margin: 10px;
    color: #C58059;
    font-weight: 500;
    font-size: 20px;
`;

export const animeDetailTable = css`
    display: block;
    margin: 0 20px;
`;

export const animeDetailTableBody = css`
    display: block;
`;

export const animeDetailTableDetail = css`
    display: block;
    border: none;
    border-bottom: 1px solid #C58059;
    color: #75868E;
    position: relative;
    padding: 10px 0 10px 50%;

    &:before {
        position: absolute;
		left: 5px;
		white-space: nowrap;
        font-weight: 500;
    }

    &:nth-of-type(1):before {
        content: "Native Title"
    }

    &:nth-of-type(2):before {
        content: "English Title"
    }

    &:nth-of-type(3):before {
        content: "Genres"
    }

    &:nth-of-type(4):before {
        content: "Episodes"
    }

    &:nth-of-type(5):before {
        content: "Average Score"
    }

    &:nth-of-type(6):before {
        content: "Collections"
    }
`;

export const animeDetailTableHead = css`
    display: none;
`;

export const animeDetailTableHeader = css`
    display: none;
`;

export const animeDetailTableLink = css`
    color: #75868E;
`;

export const animeDetailTableRow = css`
    display: block;
    border: 2px solid #C58059;
`;

export const animeDetailTitle = css`
    font-weight: 700;
    font-size: 30px;
    color: #C58059;
    margin: 10px;
`;