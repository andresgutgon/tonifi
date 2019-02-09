import React from 'react'
import { graphql } from 'gatsby'

import CurriculumVitae from '../components/CurriculumVitae'

const CVPage = ({ data }) => {
  return (
    <CurriculumVitae content={data.allCvJson.edges[0].node} />
  )
}

export default CVPage

export const pageQuery = graphql`
  query {
    allCvJson {
      edges {
        node {
          languages
          education
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
            category
            items {
              title
              director
              production
              author
              company {
                name
                url
                id
              }
              played {
                id
                tags
                name
                location
              }
            }
          }
        }
      }
    }
  }
`
