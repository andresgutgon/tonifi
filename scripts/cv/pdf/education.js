const styles = require('./styles.js')
const utils = require('./utils.js')
const { renderItem, splitInColumns, renderSubitem } = utils

function renderSubitems (item) {
  let items = []

  const startYear = renderSubitem(item.start_year, 'Curso: ')
  if (startYear) items.push(startYear)

  const endYear = renderSubitem(item.end_year, 'Curso fin: ')
  if (endYear) items.push(endYear)

  const teacher = renderSubitem(item.teacher, 'Profesor: ')
  if (teacher) items.push(teacher)

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

module.exports = function buildEducation (education) {
  const columns = splitInColumns(education, 1)
  return [
    {
      layout: styles.layoutWithDashedHeader,
      style: 'workTableRow',
      table: {
        headerRows: 1,
        widths: ['*'],
        body: [
          [
            {
              style: 'tableHeader',
              text: 'Formación'
            }
          ],
          [
            {
              columns: columns.map((column) =>
                column.map(renderItem(renderSubitems))
              )
            }
          ]
        ]
      }
    }
  ]
}
