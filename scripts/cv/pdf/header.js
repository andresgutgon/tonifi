const styles = require('./styles.js')
const utils = require('./utils.js')
const { translate } = utils

const translations = {
  es: {
    languages: 'idiomas',
    spanish_catalan_level: 'Castellano / Catalán: bilingüe',
    english_level: 'Inglés: B2',
  },
  ca: {
    languages: 'ideomes',
    spanish_catalan_level: 'Castellà / Català: bilingue',
    english_level: 'Anglès: B2',
  },
}

module.exports = function buildHeaderContent(siteData, data, locale) {
  const i18n = translate(translations, locale)
  return [
    {
      text: `${siteData.name} ${siteData.surname} ${siteData.secondSurname}`,
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
                                {
                                  style: 'contact',
                                  text: `+34 ${data.contact.phone}`,
                                },
                              ],
                              [
                                {
                                  style: 'contact',
                                  text: data.contact.email,
                                },
                              ],
                              [
                                {
                                  style: ['contactLast'],
                                  text: 'ACTOR / Director',
                                },
                              ],
                            ],
                          },
                        },
                      ],
                    ],
                  },
                },
              ],
              [
                {
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
                },
              ],
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
                  image: 'toni',
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
