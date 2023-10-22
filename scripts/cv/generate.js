const fs = require('fs')
const path = require('path')

const config = require('../../data/siteConfig.js')
const locales = config.languages.langs
const proccessData = require('./proccessData.js')
const createCVPdf = require('./createCVPdf.js')
const createDirectionCVPdf = require('./createDirectionCVPdf.js')

const dataFile = path.join(__dirname, '../..', 'src', 'data', 'cv', 'data.json')

const data = proccessData()

const LOCALE_NAMES = {
  es: 'castellano',
  ca: 'catala',
}

// Write JSON for the web
fs.writeFileSync(dataFile, JSON.stringify(data))

// Write Curriculum in PDF format
locales.forEach((locale) => {
  const localeName = LOCALE_NAMES[locale]

  // Full Curriculum
  createCVPdf({ data, locale, localeName })

  // Only direction Curriculum
  createDirectionCVPdf({ data, locale, localeName })
})

const localeNames = Object.values(LOCALE_NAMES).join(' and ')
console.log(`CV regenerated for ${localeNames} 🎉`)
