const pdfmake = require('pdfmake')
const fontBuilder = require('pdfmake/build/vfs_fonts.js')
const fs = require('fs')
const path = require('path')

const styles = require('./pdf/styles.js')
const rootPath = path.join(__dirname, '../..')
const srcPath = path.join(rootPath, 'src')
const pdfFile = path.join(srcPath, 'pdfs', 'cv.pdf')
const siteData = require('../../data/siteConfig.js')
const buildHeaderContent = require('./pdf/header.js')
const buildWork = require('./pdf/work.js')
const buildEducation = require('./pdf/education.js')

const WEIGHTS = {
  normal: 'Regular',
  bold: 'Medium',
  italic: 'Italic'
}

function buildFont () {
  return ['normal', 'bold', 'italic']
    .reduce(
      (memo, weight) => {
        memo[weight] = new Buffer(
          fontBuilder.pdfMake.vfs[`Roboto-${WEIGHTS[weight]}.ttf`],
          'base64'
        )
        return memo
      },
      {}
    )
}

function buildContent (data) {
  return Object.assign(
    styles.pageConfig,
    styles.pageStyles,
    styles.pageImages,
    {
      content: [
        ...buildHeaderContent(siteData, data),
        ...data.work.map((work, index) => {
          const isFirst = index === 0
          return buildWork(work, data, isFirst)
        }),
        ...buildEducation(data.education)
      ]
    }
  )
}

module.exports = function createPdf (data) {
  const maker = new pdfmake({ Roboto: buildFont() })
  const content = buildContent(data)
  const doc = maker.createPdfKitDocument(content)
  doc.pipe(fs.createWriteStream(pdfFile));
  doc.end();
}
