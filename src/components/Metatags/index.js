import * as React from 'react'
import Helmet from 'react-helmet'

const GOOGLE_FONTS_SITE = 'https://fonts.googleapis.com/css?family='

function Metatags({
  url,
  fonts,
  pathname,
  baseTitle,
  pageTitle,
  description,
  keywords,
  thumbnail,
  twitter,
  locale
}) {

  const title = pageTitle ? `${pageTitle} - ${baseTitle}` : baseTitle
  const thumbnailUrl = thumbnail ? `${url}/${thumbnail}` : null
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'title', content: title },
        { name: 'description', content: description },

        { property: 'og:title', content: title },
        { property: 'og:url', content: pathname ? `${url}/${pathname}` : url },
        { property: 'og:image', content: thumbnailUrl && thumbnailUrl },
        {
          property: 'og:image:secure_url',
          content: thumbnailUrl && thumbnailUrl
        },
        { property: 'og:site_name', content: baseTitle },
        { property: 'og:description', content: description },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: locale },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: thumbnailUrl && thumbnailUrl },
        { name: 'twitter:creator', content: `@${twitter}` },

        { name: 'robots', content: 'index, follow' }
      ]}
    >
      <html lang={locale} />
      <link
        href={`${GOOGLE_FONTS_SITE}${fonts}`}
        rel='stylesheet'
      />
    </Helmet>
  )
}

export default Metatags
