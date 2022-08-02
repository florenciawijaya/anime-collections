/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";

import { 
    choicesLink,
    contentTextSection,
    mainContainer,
    welcomeText,
    welcomeTitle,
} from "./styles";

const Main = () => {
    return(
            <section css={mainContainer}>
                <section css={contentTextSection}>
                    <p css={welcomeTitle}>WELCOME</p>
                    <p css={welcomeText}>to Anime List....</p>
                    <p css={welcomeText}>Create your own collection of anime</p>
                </section>

                <section>
                    <Link to="/anime" css={choicesLink}>ANIME</Link>
                    <Link to="/collection" css={choicesLink}>COLLECTION</Link>
                </section>
            </section>

    )
}

export default Main;