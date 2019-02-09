const styles = require('./styles.js')

function splitInColumns (items, numColumns) {
  const halftWorksCount = Math.round(items.length / numColumns)
  const firstColumn = items.slice(0, halftWorksCount)
  const lastColumn = items.slice(halftWorksCount, items.length)

  if (lastColumn.length <= 0) return [firstColumn]

  return [ firstColumn, lastColumn]
}

function renderSubitem (content, label) {
  if (!content) return null
  return {
    text: [
      { style: 'bold', text: label },
      content
    ]
  }
}

function renderSubitems (item) {
  let items = []

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

function renderItem (workItem) {
  debugger
  return {
    layout: 'noBorders',
    style: 'workItemRow',
    table: {
      body: [
        [
          { text: workItem.title }
        ],
        [ renderSubitems(workItem)]
      ]
    }
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
              columns: columns.map((column) => column.map(renderItem))
            }
          ],
        ]
      }
    }
  ]
}
