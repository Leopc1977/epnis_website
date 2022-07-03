import * as React from 'react'
import { Link } from 'gatsby'
import {
    container_css,
    subject_css,
    nameArticle_css,
    separatorLine_css
} from "./homeArticleModel.module.css"

/**
    Article à l'acceuil
 */
const HomeArticleModel = ({subject,nameArticle,resume,date,author,fileArticle}) => {
    return (
        <main>
            <div className={container_css}>
                <p className={subject_css}>{subject}</p>
                <p className={nameArticle_css}>
                    <Link className={nameArticle_css} to={fileArticle}>{nameArticle}
                    </Link>
                </p>
                <p>{resume}</p>

                <p>_____________</p>
                <p>Le {date}, par {author}</p>
            </div>
            <p className={separatorLine_css}>_________________</p>

        </main>
    )
}

export default HomeArticleModel