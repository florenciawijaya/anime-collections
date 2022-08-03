/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";

import { 
    animeCardCategoryTitle,
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
                        <p css={animeCardCategoryTitle}>Romaji Title</p>
                        <p css={animeCardTitle}>{anime.title.romaji}</p>
                        {anime.title.english && 
                        anime.title.romaji?.toLowerCase() !== anime.title.english?.toLowerCase() && 
                        <div>
                            <p css={animeCardCategoryTitle}>English Title</p>
                            <p css={animeCardTitle}>{anime.title.english}</p>
                        </div>
                        }
                    </section>
                </section>
            </Link>
        </div>
    )
}

export default AnimeCard;