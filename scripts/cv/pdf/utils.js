const styles = require('./styles.js')

function splitInColumns(items, numColumns) {
  const halftWorksCount = Math.round(items.length / numColumns)
  const firstColumn = items.slice(0, halftWorksCount)
  const lastColumn = items.slice(halftWorksCount, items.length)

  if (lastColumn.length <= 0) return [firstColumn]

  return [firstColumn, lastColumn]
}

function renderSubitem(content, label) {
  if (!content) return null

  const info = Array.isArray(content) ? content.join(', ') : content

  return {
    text: [{ style: 'bold', text: label }, info],
  }
}

function renderItem(renderTextFn, renderSubitemsFn) {
  return (item) => ({
    layout: 'noBorders',
    style: 'workItemRow',
    table: {
      body: [[{ text: renderTextFn(item) }], [renderSubitemsFn(item)]],
    },
  })
}

function translate(data, locale) {
  const locales = data[locale]
  return (key) => locales[key]
}

function translateContent(locale) {
  return (content) => {
    const text = content[locale]
    if (!text) return content
    return text
  }
}

module.exports = {
  renderItem,
  renderSubitem,
  splitInColumns,
  translate,
  translateContent,
}
