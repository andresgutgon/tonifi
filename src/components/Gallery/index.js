import React from 'react'
import Img from 'gatsby-image'
import autobind from 'autobind-decorator'
import Lightbox from 'react-image-lightbox'

export default class Gallery extends React.Component {
  state = {
    imageIndex: null
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
      this.setState({ imageIndex: index })
    }
  }

  render () {
    const { images } = this.props
    const { imageIndex } = this.state
    return (
      <div>
        {images.map((image, index) =>
          <div
            key={index}
            onClick={this.onClick(index)}
          >
            <Img
              title={image.title}
              alt={image.alt}
              fluid={image.src.childImageSharp.fluid}
            />
          </div>
        )}
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
