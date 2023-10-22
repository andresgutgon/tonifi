import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CurriculumVitae from '../components/CurriculumVitae'

const Direction = ({ data, location }) => {
  const { title, locale } = data.markdownRemark.frontmatter
  const content = data.allCvJson.edges[0].node
  const work = content.work.filter((work) => work.identifier === 'direction')
  const metaImage = content.work[0].image.childImageSharp.gatsbyImageData.src
  return (
    <Layout pageData={{ ...data, metaImage, locale }} location={location}>
      {({ cvPdfPath }) => (
        <CurriculumVitae
          title={title}
          pdf={{
            filepath: cvPdfPath,
            i18n: 'footer.downloadDirectorCv',
          }}
          work={work}
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
            description {
              es
              ca
            }
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
              producers {
                id
                name {
                  es
                  ca
                }
              }
            }
          }
        }
      }
    }
  }
`
