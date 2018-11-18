import React from 'react'
import cn from 'classnames/bind'
import Img from 'gatsby-image'
import autobind from 'autobind-decorator'
import Lightbox from 'react-image-lightbox'

import styles from './index.module.scss'
const cx = cn.bind(styles)

export default class Gallery extends React.Component {
  state = {
    imageIndex: null
  }

  get rowCells () {
    const { images } = this.props
    return images.map((image, index) => ({
      type: 'image', image, index
    }))
  }

  get rows () {
    const rows = this.rowCells.reduce((memo, cell) => {
      const lastRowIndex = memo.length - 1
      const lastRow = memo[lastRowIndex]
      const lastCellIndex = lastRow ? lastRow.length - 1 : null
      const lastCell = lastCellIndex !== null ? lastRow[lastCellIndex] : null
      const isFull = cell.image.full

      if (
        !isFull &&
          lastRow && lastRow.length < 2 &&
          !lastCell.image.full
      ) {
        memo[lastRowIndex].push(cell)
      } else {
        memo.push([cell])
      }

      return memo
    }, [])

    // Complete last row with empty cell
    const lastRow = rows[rows.length - 1]
    if (lastRow.length === 2) return rows
    const lastCellIndex = lastRow ? lastRow.length - 1 : null
    const lastCell = lastCellIndex !== null ? lastRow[lastCellIndex] : null
    if (lastCell.image.full) return rows
    rows[rows.length - 1].push({ type: 'empty', index: null })
    return rows
  }

  getSrc(image) {
    return image.src.childImageSharp.fluid.src
  }
  get mainSrc () {
    return this.getSrc(this.props.images[this.state.imageIndex])
  }

  get nextSrc () {
    const { images } = this.props
    const { imageIndex } = this.state
    return this.getSrc(images[(imageIndex + 1) % images.length])
  }

  get prevSrc () {
    const { images } = this.props
    const { imageIndex } = this.state
    return this.getSrc(images[(imageIndex + images.length - 1) % images.length])
  }

  @autobind
  onPrev () {
    const { images } = this.props
    const { imageIndex } = this.state
    this.setState({
      imageIndex: (imageIndex + images.length - 1) % images.length
    })
  }

  @autobind
  onNext () {
    const { images } = this.props
    const { imageIndex } = this.state
    this.setState({
      imageIndex: (imageIndex + 1) % images.length
    })
  }

  @autobind
  onClose () {
    this.setState({ imageIndex: null })
  }

  @autobind
  onClick (index) {
    return () => {
      if (!index === null) return
      this.setState({ imageIndex: index })
    }
  }

  renderCell (cell) {
    if (cell.type === 'empty') {
      return <div className={styles.emptyCell} />
    }
    const image = cell.image
    return (
      <Img
        imgStyle={{ transition: 'transform 400ms ease-out' }}
        className={styles.imageWrapper}
        title={image.title}
        alt={image.alt}
        fluid={image.src.childImageSharp.fluid}
      />
    )
  }

  render () {
    const { imageIndex } = this.state

    return (
      <div className={styles.grid}>
        {this.rows.map((row, indexRow) => (
          <div
            key={indexRow}
            className={styles.row}
          >
            {row.map((cell, index) => (
              <div
                onClick={this.onClick(cell.index)}
                key={`cell-${index}`}
                className={cx('cell', { isVisible: cell.type !== 'empty' })}
              >
                {this.renderCell(cell)}
              </div>
            ))}
          </div>
        ))}

        {imageIndex !== null && (
          <Lightbox
            mainSrc={this.mainSrc}
            nextSrc={this.nextSrc}
            prevSrc={this.prevSrc}
            onCloseRequest={this.onClose}
            onMovePrevRequest={this.onPrev}
            onMoveNextRequest={this.onNext}
          />
        )}
      </div>
    )
  }
}
