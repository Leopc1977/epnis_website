import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const ArticleModel = ({ pageTitle, children }) => {
    return (
        <main>
            <title>{pageTitle}</title>
            {children}
        </main>
    )
}

export default ArticleModel