import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ArticlesPage = () => {
  return (
    <Layout pageTitle="Articles">
        <div>
            <p>Articles</p>
            <p>Articles 1 : 
                <Link to="/articles/article_1">
                  ici
                </Link> !
            </p>
        </div>
    </Layout>
  )
}

export default ArticlesPage