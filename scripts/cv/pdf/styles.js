const path = require('path')
const rootPath = path.join(__dirname, '../../..')
const srcPath = path.join(rootPath, 'src')
const profileImagePath = path.join(srcPath, 'images', 'cv', 'profile_image.jpg')

const colors = {
  black: '#222222',
  gray: '#444444',
}
const layoutNoBorders = {
  vLineWidth: () => 0,
  paddingLeft: (i) => (i && 4) || 0,
  paddingRight: (i, node) => (i < node.table.widths.length - 1 ? 4 : 0),
}

module.exports = {
  pageConfig: {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [40, 50, 40, 60],
  },
  pageStyles: {
    styles: {
      nameHeader: {
        fontSize: 20,
        bold: true,
        margin: [0, 0, 0, 30],
      },
      contact: {
        width: 150,
        bold: true,
        margin: [0, 0, 0, 5],
      },
      description: {
        fontSize: 10,
        margin: [0, 10, 0, 5],
      },
      contactLast: {
        bold: true,
        margin: [0, 15, 0, 0],
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      introTable: {
        margin: [0, 0, 0, 20],
      },
      workTableRowFirst: {
        margin: [0, 10, 0, 40],
      },
      workTableRow: {
        margin: [0, 0, 0, 30],
      },
      tableHeader: {
        bold: true,
        fontSize: 14,
        color: colors.black,
      },
      textNormal: {
        fontSize: 14,
      },
      textSmall: {
        fontSize: 12,
      },
      textSmaller: {
        fontSize: 10,
        color: colors.gray,
      },
      bold: {
        bold: true,
      },
      workItemRow: {
        margin: [0, 0, 0, 10],
      },
    },
    defaultStyle: {
      columnGap: 30,
    },
  },
  pageImages: {
    images: {
      toni: profileImagePath,
    },
  },
  layoutNoBorders,
  layoutWithDashedHeader: Object.assign(layoutNoBorders, {
    paddingTop: (i) => {
      if (i === 0 || i === 1) return 10

      return 0
    },
    paddingBottom: (i) => {
      if (i === 0) return 10

      return 0
    },
    hLineWidth: function(i, node) {
      if (i === 0 || i === node.table.body.length) return 0
      return i === node.table.headerRows ? 1 : 0
    },
    hLineStyle: function(i, node) {
      if (i === 0 || i === node.table.body.length) {
        return null
      }
      return { dash: { length: 1, space: 1 } }
    },
  }),
}
