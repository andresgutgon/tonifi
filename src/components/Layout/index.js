import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Content from './Content'

const query = graphql`
  query SiteTitleQuery {
    allFile(
      filter: {
        extension: { eq: "pdf" },
        name: {
          in: [
            "toni-figuera-curriculum-castellano",
            "toni-figuera-curriculum-catala"
          ]
        }
      }
    ) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
    allPageMappingsJson {
      edges {
        node {
          pageUrlMappings {
            es
            ca
          }
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
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`

const FILE_NAMES = {
  'toni-figuera-curriculum-castellano': 'es',
  'toni-figuera-curriculum-catala': 'ca'
}

function findCvFile (files, locale) {
  return files
    .map(f => f.node)
    .find((data) => FILE_NAMES[data.name] === locale)
    .publicURL
}

const Layout = ({ children, location, pageData, hideFooter }) => {
  return (
    <StaticQuery query={query} render={data => {
      const metadata = {
        ...data.site.siteMetadata,
        page: {
          id: pageData.markdownRemark.frontmatter.id,
          title: pageData.markdownRemark.frontmatter.title,
          description: pageData.markdownRemark.frontmatter.description,
          keywords: pageData.markdownRemark.frontmatter.keywords,
          image: pageData.metaImage
        }
      }
      const urls = data.allPageMappingsJson.edges[0].node.pageUrlMappings
      const cvPdfPath = findCvFile(data.allFile.edges, pageData.locale)

      return (
        <Content
          children={children}
          hideFooter={hideFooter}
          location={location}
          metadata={metadata}
          urls={urls}
          cvPdfPath={cvPdfPath}
        />
      )}}
    />
  )
}

export default Layout
