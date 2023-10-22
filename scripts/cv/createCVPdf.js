const siteData = require('../../data/siteConfig.js')
const styles = require('./pdf/styles.js')
const buildHeaderContent = require('./pdf/header.js')
const buildWork = require('./pdf/work.js')
const buildEducation = require('./pdf/education.js')
const createPdf = require('./createPdf.js')

function buildContent(data, locale) {
  return Object.assign(
    styles.pageConfig,
    styles.pageStyles,
    styles.pageImages,
    {
      content: [
        ...buildHeaderContent(siteData, data, locale),
        ...data.work.map((work, index) => {
          const isFirst = index === 0
          return buildWork(work, locale, isFirst)
        }),
        ...buildEducation(data.education, locale),
      ],
    }
  )
}

module.exports = function createCVPdf({ data, locale, localeName }) {
  const baseFileName = 'toni-figuera-curriculum'
  const filename = `${baseFileName}-${localeName}`
  createPdf({
    content: buildContent(data, locale),
    filename,
  })
}
