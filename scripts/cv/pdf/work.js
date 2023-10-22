const styles = require('./styles.js')
const utils = require('./utils.js')
const {
  renderItem,
  splitInColumns,
  renderSubitem,
  translate,
  translateContent,
} = utils

const translations = {
  es: {
    year: 'Año',
    author: 'Autor',
    director: 'Director',
    producer: 'Productora',
    perform_in: 'Representado en',
    company: 'Compañía',
  },
  ca: {
    year: 'Any',
    author: 'Autor',
    director: 'Director',
    producer: 'Productora',
    perform_in: 'Representat en',
    company: 'Companyia',
  },
}

function buildEntityList(entities, i18nContent) {
  return entities
    .map((entity) => {
      const translatedName = i18nContent(entity.name)
      if (!entity.location) return translatedName
      return `${translatedName} (${entity.location})`
    })
    .join(' / ')
}

function renderSubitems(i18n, i18nContent, renderYears) {
  return function(item) {
    let items = []

    const years = renderSubitem(item.years, `${i18n('year')}: `)
    if (years && renderYears) items.push(years)

    const author = renderSubitem(item.author, `${i18n('author')}: `)
    if (author) items.push(author)

    const director = renderSubitem(item.director, `${i18n('director')}: `)
    if (director) items.push(director)

    const playedPlaces = buildEntityList(item.played, i18nContent)
    if (playedPlaces.length > 0) {
      items.push(renderSubitem(playedPlaces, `${i18n('perform_in')}: `))
    }

    const producers = buildEntityList(item.producers, i18nContent)
    if (producers.length > 0) {
      items.push(renderSubitem(producers, `${i18n('producer')}: `))
    }

    if (item.company) {
      const company = renderSubitem(
        i18nContent(item.company.name),
        `${i18n('company')}: `
      )
      if (company) items.push(company)
    }

    if (items.length < 1) return {}

    const [first, ...rest] = items
    // Add space before each text
    let restWithSpace = []
    if (rest.length > 0) {
      restWithSpace = rest.map((item) => ({
        text: [' ', ...item.text],
      }))
    }

    return {
      style: 'textSmaller',
      text: [first, ...restWithSpace],
    }
  }
}

function translateTitle(i18nContent) {
  return (item) => i18nContent(item.title)
}

module.exports = function buildWork({
  work,
  locale,
  isFirst = false,
  renderYears = false,
  overrideTitle = null,
}) {
  const columns = splitInColumns(work.items, 1)
  const i18n = translate(translations, locale)
  const i18nContent = translateContent(locale)
  const renderItemsFn = renderSubitems(i18n, i18nContent, renderYears)
  const renderTextFn = translateTitle(i18nContent)
  return [
    {
      layout: styles.layoutWithDashedHeader,
      style: isFirst ? 'workTableRowFirst' : 'workTableRow',
      table: {
        headerRows: 1,
        widths: ['*'],
        body: [
          [
            {
              style: 'tableHeader',
              text: overrideTitle ?? i18nContent(work.category),
            },
          ],
          [
            {
              columns: columns.map((column) =>
                column.map(renderItem(renderTextFn, renderItemsFn))
              ),
            },
          ],
        ],
      },
    },
  ]
}
