const styles = require('./styles.js')
const utils = require('./utils.js')
const { renderItem, splitInColumns, renderSubitem } = utils

function renderSubitems (item) {
  let items = []

  const year = renderSubitem(item.year, 'Año: ')
  if (year) items.push(year)

  const author = renderSubitem(item.author, 'Autor: ')
  if (author) items.push(author)

  const director = renderSubitem(item.director, 'Director: ')
  if (director) items.push(director)

  let played
  const playedContent = item.played.map(place => {
    if (!place.location) return place.name
    return `${place.name} (${place.location})`
  }).join(' / ')

  if (playedContent.length > 0) {
    played = renderSubitem(playedContent, 'Representado en: ')
  }
  if (played) items.push(played)

  if (item.company) {
    const company = renderSubitem(item.company.name, 'Compañía: ')
    if (company) items.push(company)
  }

  if (items.length < 1) return {}

  const [first, ...rest] = items
  // Add space before each text
  let restWithSpace = []
  if (rest.length > 0) {
    restWithSpace = rest.map(item => ({
      text: [
        ' ',
        ...item.text
      ]
    }))
  }

  return {
    style: 'textSmaller',
    text: [first, ...restWithSpace]
  }
}

module.exports = function buildWork (work, allData, isFirst) {
  const columns = splitInColumns(work.items, 2)

  return [
    {
      layout: styles.layoutWithDashedHeader,
      style: isFirst? 'workTableRowFirst' : 'workTableRow',
      table: {
        headerRows: 1,
        widths: ['*'],
        body: [
          [
            {
              style: 'tableHeader',
              text: work.category
            }
          ],
          [
            {
              columns: columns.map((column) =>
                column.map(renderItem(renderSubitems))
              )
            }
          ],
        ]
      }
    }
  ]
}
