import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Content from './Content'

const query = graphql`
  query SiteTitleQuery {
    allFile(
      filter: {
        extension: { eq: "pdf" }
        name: {
          in: [
            "toni-figuera-curriculum-castellano"
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
        phone
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

const FILE_KEYS = { direction: 'direction', cv: 'cv' }
const FILE_NAMES = {
  'toni-figuera-direccio': { locale: 'ca', key: FILE_KEYS.direction },
  'toni-figuera-curriculum-catala': { locale: 'ca', key: FILE_KEYS.cv },
  'toni-figuera-direccion': { locale: 'es', key: FILE_KEYS.direction },
  'toni-figuera-curriculum-castellano': { locale: 'es', key: FILE_KEYS.cv },
}

function findCvFiles(files, locale) {
  console.log('FILES', files)
  return files.reduce((memo, file) => {
    const node = file.node
    const descriptor = FILE_NAMES[node.name]
    console.log('DESCRIPTOR', descriptor)

    if (descriptor.locale !== locale) return memo

    memo[descriptor.key] = node.publicURL

    console.log('MEMo', memo)
    return memo
  }, {})
}

const Layout = ({ children, location, pageData, hideFooter }) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const metadata = {
          ...data.site.siteMetadata,
          page: {
            id: pageData.markdownRemark.frontmatter.id,
            title: pageData.markdownRemark.frontmatter.title,
            description: pageData.markdownRemark.frontmatter.description,
            keywords: pageData.markdownRemark.frontmatter.keywords,
            image: pageData.metaImage,
          },
        }
        const urls = data.allPageMappingsJson.edges[0].node.pageUrlMappings
        const pdfFiles = findCvFiles(data.allFile.edges, pageData.locale)
        console.log('FILES', pdfFiles)
        return (
          <Content
            children={children}
            hideFooter={hideFooter}
            location={location}
            metadata={metadata}
            urls={urls}
            pdfFiles={pdfFiles}
          />
        )
      }}
    />
  )
}

export default Layout
