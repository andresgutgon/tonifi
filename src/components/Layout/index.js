import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from '../Sidebar'

// Load reset and global styles
import '../../styles/index.scss'

import styles from './index.module.scss'
const cx = classNames.bind(styles)

const Layout = ({ fullExpanded = false, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            name
            surname
            copyright
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
        </Helmet>
        <div className={cx('layout', { fullExpanded })} >
          <div className={styles.sidebar}>
            <Sidebar
              name={data.site.siteMetadata.name}
              surname={data.site.siteMetadata.surname}
              copyright={data.site.siteMetadata.copyright}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.contentInner}>
              {children}
            </div>
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
