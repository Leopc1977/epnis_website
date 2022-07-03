import * as React from 'react'
import { Link } from 'gatsby'

import {
    heading_css,
    nameArticle_css,
    blocArticle_css,
    intro_css,
    chapter_css,
    socialNetwork_css

} from './articleModel.module.css'

import crab from '../images/crabe_0.png'

const ArticleModel = ({ }) => {
    return (
        <main>
            <div className={heading_css}>
                <p className={nameArticle_css}>À propos de marches aléatoires</p>
                <p>Publié le 20.05.22 | Par Lucile Laulin</p>
            </div>

            <div className={blocArticle_css}>
                <p className={intro_css}>Une marche aléatoire est un modèle mathématique issu de la théorie des Probabilités. Elle est composée d'une succession de pas effectués de manière aléatoire, généralement sans lien avec les pas précédents.</p>
                
                <p className={chapter_css}>1. Le modèle</p>
                <p>On appelle marche aléatoire sur Z le modèle mathématique décrit de la manière suivante. À l'instant n=0, un crabe se trouve à l'origine (le point 0 de la droite des entiers relatifs).  Aux instants suivants, il peut se déplacer en allant à droite avec probabilité p ou à gauche avec probabilité 1−p indépendamment des déplacements précédents. On peut s'intéresser à l'évolution de la position du crabe dans le temps ou encore à la probabilité qu'il a de revenir à l'origine.</p>
                <img src={crab} width="90%"></img>
                <p>Soit Sn la position du crabe à l'instant n et Xk la variable qui décrit le k-ième pas, c'est-à-dire pour k≥1p /////////////////////////</p>

            
            </div>
            <div className={socialNetwork_css}>
                <p>Partager cet article</p>
                <a href='https://Twitter.com'>Twitter</a>

            </div>
        </main>
    )
}

export default ArticleModel