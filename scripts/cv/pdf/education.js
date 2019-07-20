const styles = require('./styles.js')
const utils = require('./utils.js')
const {
  renderItem,
  splitInColumns,
  renderSubitem,
  translate,
  translateContent
} = utils

const translations = {
  es: {
    course: 'Curso',
    course_end: 'Curso fin',
    teacher: 'Profesor',
    company: 'Compañía',
    education: 'Formación'
  },
  ca: {
    course: 'Curs',
    course_end: 'Curs fi',
    teacher: 'Professor',
    company: 'Companya',
    education: 'Estudis'
  }
}
function renderSubitems (i18n, i18nContent) {
  return function (item) {
    let items = []

    const years = renderSubitem(item.years, `${i18n('course')}: `)
    if (years) items.push(years)

    const endYear = renderSubitem(item.end_year, `${i18n('course_end')}: `)
    if (endYear) items.push(endYear)

    const teacher = renderSubitem(item.teacher, `${i18n('teacher')}: `)
    if (teacher) items.push(teacher)

    if (item.company) {
      const company = renderSubitem(i18nContent(item.company.name), `${i18n('company')}: `)
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
}

function translateTitle (i18nContent) {
  return (item) => i18nContent(item.title)
}

module.exports = function buildEducation (education, locale) {
  const columns = splitInColumns(education, 1)
  const i18n = translate(translations, locale)
  const i18nContent = translateContent(locale)
  const renderItemsFn = renderSubitems(i18n, i18nContent)
  const renderTextFn = translateTitle(i18nContent)

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
              text: i18n('education')
            }
          ],
          [
            {
              columns: columns.map((column) =>
                column.map(renderItem(renderTextFn, renderItemsFn))
              )
            }
          ]
        ]
      }
    }
  ]
}
