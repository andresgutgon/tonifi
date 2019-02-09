const styles = require('./styles.js')

module.exports = function buildEducation (education) {
  // NOTE: Hack with extra margin to not repeat header
  // look at `educationTable` styles
  return [
    {
      layout: styles.layoutWithDashedHeader,
      style: 'educationTable',
      table: {
        headerRows: 1,
        widths: ['*'],
        body: [
          [{ style: 'tableHeader', text: 'Formación actoral' }],
          [ education.map(text =>({ text, style: 'education' })) ]
        ]
      }
    }
  ]
}
