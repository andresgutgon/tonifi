import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Contact from '../components/Contact'

const ContactTemplate = ({ data, location }) => {
  const { title, description, locale } = data.markdownRemark.frontmatter
  return (
    <Layout pageData={{ ...data, locale }} location={location}>
      {() => <Contact title={title} description={description} />}
    </Layout>
  )
}

export default ContactTemplate

export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
