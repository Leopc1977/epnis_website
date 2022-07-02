import * as React from 'react'
import Layout from '../components/layout'
import HomeArticleModel from '../components/homeArticleModel'
import "../components/base_css.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Acceuil">
      <HomeArticleModel subject="Supérieur" 
                        nameArticle="À propos de marches aléatoires"
                        resume="Une marche aléatoire est un modèle mathématique issu de la théorie des Probabilités. Elle est composée d'une succession de pas effectués de manière aléatoire, généralement sans lien avec les pas précédents.
                        "
                        date="20.05.22"
                        author="Lucile Laulin"
                        fileArticle="articles/article_1"
      >
      </HomeArticleModel>

      <HomeArticleModel subject="Supérieur" 
                        nameArticle="À propos de marches aléatoires"
                        resume="Une marche aléatoire est un modèle mathématique issu de la théorie des Probabilités. Elle est composée d'une succession de pas effectués de manière aléatoire, généralement sans lien avec les pas précédents.
                        "
                        date="20.05.22"
                        author="Lucile Laulin"
      >
      </HomeArticleModel>

      <HomeArticleModel subject="Supérieur" 
                        nameArticle="À propos de marches aléatoires"
                        resume="Une marche aléatoire est un modèle mathématique issu de la théorie des Probabilités. Elle est composée d'une succession de pas effectués de manière aléatoire, généralement sans lien avec les pas précédents.
                        "
                        date="20.05.22"
                        author="Lucile Laulin"
      >
      </HomeArticleModel>
    </Layout>
    
  )
}

export default IndexPage