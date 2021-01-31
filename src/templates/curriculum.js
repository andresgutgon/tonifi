import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CurriculumVitae from '../components/CurriculumVitae'

const CVPage = ({ data, cvPdfPath, location }) => {
  const { title, locale } = data.markdownRemark.frontmatter
  const content = data.allCvJson.edges[0].node
  const metaImage = content.work[0].image.childImageSharp.fluid.src
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

export default CVPage

export const pageQuery = graphql`
  query CvPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
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
          education {
            title { es ca }
            teacher
            is_career
            years
          }
          contact {
            email
            phone
          }
          work {
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            category { es ca }
            items {
              title { es ca }
              years
              director
              production
              author
              company {
                name { es ca }
                url
                id
              }
              played {
                id
                name { es ca }
                location
              }
            }
          }
        }
      }
    }
  }
`
