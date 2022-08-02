/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";

import { 
    animeCardContainer,
    animeContent,
    animeCardImage,
    animeCardLink,
    animeCardTitle,
    animeCardTitleSection,
} from "./styles";

const AnimeCard = (props) => {
    const { anime } = props;

    return(
        <div css={animeCardContainer}>
            <Link to={`/anime/${anime.id}`} css={animeCardLink}>
                <section css={animeContent}>
                    <img src={anime.coverImage.large} css={animeCardImage}/>
                    <section css={animeCardTitleSection}>
                        <p css={animeCardTitle}>{anime.title.romaji}</p>
                        {anime.title.romaji?.toLowerCase() !== anime.title.english?.toLowerCase() && <p css={animeCardTitle}>{anime.title.english}</p>}
                    </section>
                </section>
            </Link>
        </div>
    )
}

export default AnimeCard;