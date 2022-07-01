import * as React from 'react'
import Layout from '../../components/layout'
import ArticleModel from '../../components/articleModel'

const article_1 = () => {
  return (
    <Layout pageTitle="Page : Article 1">
        <ArticleModel pageTitle="Article : 1.">
            <p>contenu de l'article</p>
        </ArticleModel>
    </Layout>
  )
}

export default article_1