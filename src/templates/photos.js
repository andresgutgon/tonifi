import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Photos from '../components/Photos'

const PhotosTemplate = ({ data, location }) => {
  const { title, description, images, locale } = data.markdownRemark.frontmatter
  const metaImage = images[0].src.childImageSharp.gatsbyImageData.src
  return (
    <Layout pageData={{ ...data, metaImage, locale }} location={location}>
      {() => (
        <Photos title={title} description={description} images={images} />
      )}
    </Layout>
  )
}

export default PhotosTemplate

export const pageQuery = graphql`query PhotosPageQuery($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      id
      title
      description
      keywords
      locale
      path
      images {
        title
        alt
        src {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        full
      }
    }
  }
}
`
