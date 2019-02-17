// @flow
import * as React from 'react'
import positionerFactory from './positioner'

import styles from './index.module.scss'

export default class StickyComponent extends React.Component {
  positionerFn
  state = {
    fixedStyles: null
  }
  _statusNode

  constructor (props) {
    super(props)
    this.positionerFn = positionerFactory(props.position)
    this.updateDimensions = this._updateDimensions.bind(this)
    this.handleScroll = this._handleScroll.bind(this)
  }

  componentDidMount () {
    // Initial setup of sticky before listeners
    this.updateDimensions()
    this.handleScroll()

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  _updateDimensions () {
    const node = this._statusNode
    if (!node) return // flow
    const measurements = node.getBoundingClientRect()
    const scrollY = window.scrollY
    if (scrollY > 0) {
      // If page is scrolled when resized
      // We need to add that different to measurements
      measurements.y += scrollY
    }
    this.measurements = {
      ...measurements.toJSON(),
      scrollHeight: document.body.scrollHeight,
      innerHeight: window.innerHeight
    }
  }

  _handleScroll () {
    const { fixedStyles: styles } = this.state
    const measurements = this.measurements

    if (!measurements) return // flow

    const scrollY = window.scrollY
    const fixedStyles = this.positionerFn({ scrollY, measurements, styles })

    if (!fixedStyles) return

    this.setState({ fixedStyles })
  }

  render () {
    const { children } = this.props
    const { fixedStyles } = this.state
    const inlineStyles = fixedStyles || {}
    const fixed = inlineStyles && inlineStyles.position === 'fixed'
    const measurements = this.measurements
    const outStyles = measurements ? { height: measurements.height } : null
    return (
      <div
        className={styles.root}
        ref={node => {
          this._statusNode = node
        }}
        style={outStyles}
      >
        {children({ fixed, inlineStyles })}
      </div>
    )
  }
}
