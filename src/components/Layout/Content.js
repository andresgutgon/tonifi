import * as React from 'react'

import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'

import { AppProvider } from '../../context/AppContext'
import Metatags from '../Metatags'
import Footer from '../Footer'
import Navigation from '../Navigation'

import 'intl'

// Load global styles
import 'react-image-lightbox/style.css'
import '../../styles/index.scss'

import styles from './index.module.scss'

export const urlForId = (pageId, langKey, urls) => {
  const id = Number(pageId) - 1
  const path = `${urls[id][langKey]}`
  if (langKey === 'ca') return path === '' ? '/' : path

  return `/${langKey}/${path}`
}

class Content extends React.Component {
  static defaultProps = {
    hideFooter: false,
  }

  constructor(props) {
    super(props)
    const { urls, metadata, location } = props
    const { langs, defaultLangKey } = metadata.languages

    this.pathname = location.pathname
    this.langKey = getCurrentLangKey(langs, defaultLangKey, this.pathname)
    this.homeLink = `/${this.langKey}`.replace(`/${defaultLangKey}/`, '/')
    if (metadata.page.id) {
      this.langsMenu = getLangs(
        langs,
        this.langKey,
        getUrlForLang(this.homeLink, this.pathname)
      ).map((item) => {
        return {
          ...item,
          link: urlForId(metadata.page.id, item.langKey, urls),
        }
      })
    }

    // Load translations for current locale
    this.i18nMessages = require(`../../data/messages/${this.langKey}`)
    this.appContext = {
      locale: this.langKey,
      defaultLocale: defaultLangKey,
      locales: langs,
    }
  }

  render() {
    const { children, metadata, cvPdfPath, urls, hideFooter } = this.props
    return (
      <IntlProvider locale={this.langKey} messages={this.i18nMessages}>
        <AppProvider value={this.appContext}>
          <Metatags
            fonts={metadata.fonts}
            twitter={metadata.twitterUsername}
            url={metadata.siteUrl}
            baseTitle={metadata.title}
            langs={this.langsMenu}
            pageTitle={metadata.page.title}
            description={metadata.page.description}
            keywords={metadata.page.keywords}
            pathname={this.pathname}
            thumbnail={metadata.page.metaImage}
            locale={this.langKey}
          />
          <div className={styles.layout}>
            <div className={styles.nav}>
              <Navigation
                urls={urls}
                langKey={this.langKey}
                langsMenu={this.langsMenu}
                name={metadata.name}
                surname={metadata.surname}
                phone={metadata.phone}
                cvPdfPath={cvPdfPath}
                copyright={metadata.copyright}
              />
            </div>

            <main className={styles.main}>{children({ cvPdfPath })}</main>

            {!hideFooter && (
              <div className={styles.footer}>
                <Footer
                  langsMenu={this.langsMenu}
                  phone={metadata.phone}
                  cvPdfPath={cvPdfPath}
                  copyright={metadata.copyright}
                />
              </div>
            )}
          </div>
        </AppProvider>
      </IntlProvider>
    )
  }
}

export default Content
