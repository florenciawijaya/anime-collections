/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const animePageFlexContainer = css`
    @media (min-width: 480px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const animePageFlexElement = css`
    @media (min-width: 480px) {
        flex-basis: 50%;
    }
`;

export const animePageLoading = css`
    font-style: italic;
    margin: 10px;
`;

export const animePageTitle = css`
    font-size: 30px;
    font-weight: 700;
    color: #C58059;
    margin: 10px;
`;