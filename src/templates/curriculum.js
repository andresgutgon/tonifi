import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CurriculumVitae from '../components/CurriculumVitae'

const CVPage = ({ data, location }) => {
  const { title, locale } = data.markdownRemark.frontmatter
  const content = data.allCvJson.edges[0].node
  const education = content.education
  const work = content.work.filter((work) => work.identifier !== 'direction')
  const metaImage = work[0].image.childImageSharp.gatsbyImageData.src
  return (
    <Layout pageData={{ ...data, metaImage, locale }} location={location}>
      {({ pdfFiles }) => (
        <CurriculumVitae
          title={title}
          pdf={{
            filepath: pdfFiles.cv,
            i18n: 'footer.downloadCv',
          }}
          work={work}
          education={education}
        />
      )}
    </Layout>
  )
}

export default CVPage
export const pageQuery = graphql`
  query CvCurriculumQuery($id: String!) {
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
