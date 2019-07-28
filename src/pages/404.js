import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import NotFound from '../components/NotFound'

const TRANSLATIONS = {
  es: {
    title: 'Página no encontrada',
    description: 'La página a la que has llegado no existe',
  },
  ca: {
    title: 'Página no encontrada',
    description: 'La pàgina a la qual has arribat no existeix',
  }
}

const NotFoundTemplate = ({ location }) => {
  const locale = location.pathname.startsWith('/ca/') ? 'ca' : 'es'
  const { title, description } = TRANSLATIONS[locale]
  const pageData = {
    markdownRemark: { frontmatter: { title, description } }
  }
  return (
    <Layout pageData={{ ...pageData, locale }} location={location}>
      {() => (
        <NotFound title={title} description={description} />
      )}
    </Layout>
  )
}
export default NotFoundTemplate
