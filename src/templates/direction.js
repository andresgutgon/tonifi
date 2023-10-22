import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CurriculumVitae from '../components/CurriculumVitae'

const Direction = ({ data, location }) => {
  const { title, locale } = data.markdownRemark.frontmatter
  const content = data.allCvJson.edges[0].node
  const direction = content.work.filter(
    (work) => work.identifier === 'direction'
  )[0]
  const descriptions = direction.description[locale]
  const metaImage = content.work[0].image.childImageSharp.gatsbyImageData.src
  return (
    <Layout pageData={{ ...data, metaImage, locale }} location={location}>
      {({ pdfFiles }) => (
        <CurriculumVitae
          title={title}
          descriptions={descriptions}
          pdf={{
            filepath: pdfFiles.direction,
            i18n: 'footer.downloadDirectorCv',
          }}
          work={[direction]}
        />
      )}
    </Layout>
  )
}

export default Direction
export const pageQuery = graphql`
  query CvDirectionQuery($id: String!) {
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
          education {
            title {
              es
              ca
            }
            teacher
            is_career
            years
          }
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
