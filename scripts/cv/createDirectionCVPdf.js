const siteData = require('../../data/siteConfig.js')
const styles = require('./pdf/styles.js')
const buildHeaderContent = require('./pdf/header.js')
const buildWork = require('./pdf/work.js')
const buildEducation = require('./pdf/education.js')
const createPdf = require('./createPdf.js')

function buildContent(data, locale) {
  const direction = data.work.find((w) => w.identifier === 'direction')
  return Object.assign(
    styles.pageConfig,
    styles.pageStyles,
    styles.pageImages,
    {
      content: [
        ...buildHeaderContent(siteData, data, locale),
        ...buildWork(direction, locale, true),
      ],
    }
  )
}

module.exports = function createDirectionCVPdf({ data, locale }) {
  const filename =
    locale === 'ca' ? 'toni-figuera-direccio' : 'toni-figuera-direccion'
  createPdf({
    content: buildContent(data, locale),
    filename,
  })
}
