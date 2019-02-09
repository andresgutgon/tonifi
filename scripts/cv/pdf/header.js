const styles = require('./styles.js')
module.exports = function buildHeaderContent (siteData, data) {
  return [
    {
      text: `${siteData.name} ${siteData.surname} ${siteData.secondSurname}`,
      style: 'nameHeader'
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
                    paddingLeft: (i, node) => 20,
                    paddingRight: (i, node) => 20,
                    paddingTop: (i, node) => 15,
                    paddingBottom: (i, node) => 15
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
                                  text: `+34 ${data.contact.phone}`
                                }
                              ],
                              [
                                {
                                  style: 'contact',
                                  text: data.contact.email,
                                }
                              ],
                              [
                                {
                                  style: ['contactLast'],
                                  text: 'ACTOR / Director'
                                }
                              ]
                            ]
                          }
                        }
                      ]
                    ]
                  }
                }
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
                          text: 'IDIOMAS'
                        }
                      ],
                      [
                        {
                          text: 'Castellano / Catalán: bilingüe',
                          style: 'textSmall'
                        }
                      ],
                      [
                        {
                          text: 'Inglés: B2',
                          style: 'textSmall'
                        }
                      ]
                    ]
                  }
                }
              ]
            ]
          }
        },
        {
          width: '*',
          layout: 'noBorders',
          table: {
            body: [
              [
                {
                  image: 'toni',
                  width: 180
                }
              ]
            ]
          }
        }
      ]
    }
  ]
}
