const siteData = require('../../data/siteConfig.js')
const styles = require('./pdf/styles.js')
const buildHeader = require('./pdf/header.js')
const buildDescription = require('./pdf/description.js')
const buildWork = require('./pdf/work.js')
const createPdf = require('./createPdf.js')

const TRANSLATIONS = {
  es: {
    title: 'Director de Teatro',
    cv: 'Currículo',
  },
  ca: {
    title: 'Director de Teatre',
    cv: 'Currículum',
  },
}
function buildContent(data, locale) {
  const direction = data.work.find((w) => w.identifier === 'direction')
  const title = TRANSLATIONS[locale].title
  const descriptionItems = direction.description[locale]
  return Object.assign(
    styles.pageConfig,
    styles.pageStyles,
    styles.pageImages,
    {
      content: [
        ...buildHeader({
          data,
          locale,
          title,
          showName: true,
          image: 'toniMaduro',
        }),
        ...buildDescription(descriptionItems, locale),
        ...buildWork({
          work: direction,
          locale,
          overrideTitle: TRANSLATIONS[locale].cv,
          isFirst: true,
          renderYears: true,
        }),
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
