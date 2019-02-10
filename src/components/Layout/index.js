import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Metatags from '../Metatags'
import Footer from '../Footer'
import Navigation from '../Navigation'

// Load global styles
import 'react-image-lightbox/style.css'
import '../../styles/index.scss'

import styles from './index.module.scss'

const Layout = ({
  children,
  pathname,
  pageTitle,
  metaImage,
  hideFooter = false
}) => (
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
            siteUrl
            name
            surname
            copyright
            instagramUsername
            twitterUsername
            fonts
          }
        }
      }
    `}
    render={data => (
      <>
        <Metatags
          fonts={data.site.siteMetadata.fonts}
          baseTitle={data.site.siteMetadata.title}
          pageTitle={pageTitle}
          url={data.site.siteMetadata.siteUrl}
          twitter={data.site.siteMetadata.twitterUsername}
          pathname={pathname}
          thumbnail={metaImage}
          description='Toni figuera actor'
          keywords='actor, director, cine, teatro'
          locale='es'
        />
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
          {!hideFooter &&
            <div className={styles.footer}>
              <Footer
                instagramUsername={data.site.siteMetadata.instagramUsername}
                cvPdfPath={data.allFile.edges[0].node.publicURL}
                copyright={data.site.siteMetadata.copyright}
              />
            </div>
          }
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
