const fs = require('fs')
const path = require('path')

import i18nFallbacks from './i18nFallbacks'
const dataPath = path.join(__dirname, 'testData', 'cv.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

test('add fallbacks', () => {
  expect(i18nFallbacks(data)).toEqual({
    contact: {
      phone: '606 97 97 35',
      email: 'tonifiguera@hotmail.com',
      name: {
        es: 'Antonio',
        ca: 'Toni'
      }
    },
    languages: ['Castellano', 'Català', 'English'],
    work: [
      {
        category: 'Audiovisual',
        image: 'audiovisual.jpg',
        items: [
          {
            title: {
              es: 'El cazador de lobos (curtmetratge / protagonista)',
              ca: 'El cazador de lobos (curtmetratge / protagonista)'
            },
            years: [2019],
            production: 'Rll produccions'
          }
        ]
      }
    ]
  })
})
