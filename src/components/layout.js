import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  logo_css
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className={container}>
        <title>{pageTitle} - Les élements</title>
        <p className={logo_css}>LES ELEMENTS</p>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/articles" className={navLinkText}>
                Articles
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout