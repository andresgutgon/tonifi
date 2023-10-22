import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CurriculumVitae from '../components/CurriculumVitae'

const Direction = ({ data, location }) => {
  const { title, locale } = data.markdownRemark.frontmatter
  const content = data.allCvJson.edges[0].node
  const metaImage = content.work[0].image.childImageSharp.gatsbyImageData.src
  return (
    <Layout pageData={{ ...data, metaImage, locale }} location={location}>
      {({ cvPdfPath }) => (
        <CurriculumVitae
          title={title}
          cvPdfPath={cvPdfPath}
          content={content}
        />
      )}
    </Layout>
  )
}

export default Direction

export const pageQuery = graphql`
  query DirectionPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        id
        title
        description
        keywords
        locale
      }
    }
    allCvJson {
      edges {
        node {
          contact {
            email
            phone
          }
          work {
            identifier
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            category {
              es
              ca
            }
            items {
              title {
                es
                ca
              }
              years
              director
              production
              author
              company {
                name {
                  es
                  ca
                }
                url
                id
              }
              played {
                id
                name {
                  es
                  ca
                }
                location
              }
            }
          }
        }
      }
    }
  }
`
