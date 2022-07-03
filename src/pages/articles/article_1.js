import * as React from 'react'
import Layout from '../../components/layout'
import ArticleModel from '../../components/articleModel'
require(`katex/dist/katex.min.css`)
var Latex = require('react-latex');

const article_1 = () => {
  return (
    <Layout pageTitle="Article 1">

        <ArticleModel>
        <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex>

        </ArticleModel>
    </Layout>
  )
}

export default article_1