const { translate } = require('./utils.js')

const translations = {
  es: { title: 'Experiencia' },
  ca: { title: 'Experiència' },
}
module.exports = function buildHeaderContent(descriptionItems, locale) {
  const i18n = translate(translations, locale)
  return [
    {
      style: 'tableHeader',
      margin: [0, 20, 0, 0],
      text: i18n('title'),
    },
    ...descriptionItems.map((text) => ({
      style: 'description',
      text,
    })),
  ]
}
