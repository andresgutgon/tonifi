const { languages } = require('../../../data/siteConfig.js')
const styles = require('./styles.js')
const { translate } = require('./utils.js')

const TRANSLATIONS = {
  es: {
    languages: 'idiomas',
    spanish_catalan_level: 'Castellano / Catalán: bilingüe',
    english_level: 'Inglés: B2',
  },
  ca: {
    languages: 'idiomes',
    spanish_catalan_level: 'Castellà / Català: bilingue',
    english_level: 'Anglès: B2',
  },
}

function buildLanguges(locale) {
  const i18n = translate(TRANSLATIONS, locale)
  return {
    layout: styles.layoutWithDashedHeader,
    table: {
      headerRows: 1,
      widths: ['*'],
      body: [
        [
          {
            style: 'tableHeader',
            text: i18n('languages').toUpperCase(),
          },
        ],
        [
          {
            text: i18n('spanish_catalan_level'),
            style: 'textSmall',
          },
        ],
        [
          {
            text: i18n('english_level'),
            style: 'textSmall',
          },
        ],
      ],
    },
  }
}

module.exports = function buildHeaderContent({
  data,
  locale,
  image,
  title,
  showLanguages = false,
  showSkils = false,
  showName = false,
}) {
  return [
    {
      text: title,
      style: 'nameHeader',
    },
    {
      columns: [
        {
          layout: 'noBorders',
          width: '*',
          table: {
            body: [
              [
                {
                  layout: {
                    paddingLeft: () => 20,
                    paddingRight: () => 20,
                    paddingTop: () => 15,
                    paddingBottom: () => 15,
                  },
                  table: {
                    body: [
                      [
                        {
                          layout: 'noBorders',
                          table: {
                            widths: [200],
                            body: [
                              [
                                showName
                                  ? {
                                    style: 'contact',
                                    text: 'Toni Figuera',
                                  }
                                  : {},
                              ],
                              [
                                {
                                  style: 'contact',
                                  text: data.contact.phone,
                                },
                              ],
                              [
                                {
                                  style: 'contact',
                                  text: data.contact.email,
                                },
                              ],
                              [
                                showSkils
                                  ? {
                                    style: ['contactLast'],
                                    text: 'ACTOR / Director',
                                  }
                                  : {},
                              ],
                            ],
                          },
                        },
                      ],
                    ],
                  },
                },
              ],
              [showLanguages ? buildLanguges(locale) : {}],
            ],
          },
        },
        {
          width: '*',
          layout: 'noBorders',
          table: {
            body: [
              [
                {
                  image,
                  width: 180,
                },
              ],
            ],
          },
        },
      ],
    },
  ]
}
