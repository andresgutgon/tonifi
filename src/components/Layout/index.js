import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Footer from '../Footer'
import Navigation from '../Navigation'

// Load global styles
import 'react-image-lightbox/style.css'
import '../../styles/index.scss'

import styles from './index.module.scss'

const GOOGLE_FONTS_SITE = 'https://fonts.googleapis.com/css?family='
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        allFile(filter: { extension: { eq: "pdf" }, name: { eq:"cv"} }) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
        site {
          siteMetadata {
            title
            name
            surname
            copyright
            instagramUsername
            fonts
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Toni figuera actor' },
            { name: 'keywords', content: 'actor, director, cine, teatro' },
          ]}
        >
          <html lang="es" />
          <link
            href={`${GOOGLE_FONTS_SITE}${data.site.siteMetadata.fonts}`}
            rel='stylesheet'
          />
        </Helmet>
        <div className={styles.layout}>
          <div className={styles.nav}>
            <Navigation
              name={data.site.siteMetadata.name}
              surname={data.site.siteMetadata.surname}
              instagramUsername={data.site.siteMetadata.instagramUsername}
              cvPdfPath={data.allFile.edges[0].node.publicURL}
              copyright={data.site.siteMetadata.copyright}
            />
          </div>
          <main className={styles.main}>
            {children}
          </main>
          <div className={styles.footer}>
            <Footer
              instagramUsername={data.site.siteMetadata.instagramUsername}
              cvPdfPath={data.allFile.edges[0].node.publicURL}
              copyright={data.site.siteMetadata.copyright}
            />
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
