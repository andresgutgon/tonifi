import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import VideoBook from '../components/VideoBook'

const VideoBookTemplate = ({ data, location }) => {
  const { title, description, locale } = data.markdownRemark.frontmatter
  return (
    <Layout pageData={{ ...data, locale }} location={location}>
      {() => (<VideoBook title={title} description={description} />)}
    </Layout>
  )
}

export default VideoBookTemplate

export const pageQuery = graphql`
  query VideobookPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        id
        title
        description
        keywords
        locale
        path
      }
    }
  }
`
