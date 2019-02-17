function positionTop ({ scrollY, styles, measurements }) {
  const { x, width } = measurements
  const top = measurements.top
  if ((!styles || !styles.position) && top <= scrollY) {
    return {
      position: 'fixed',
      top: 0,
      width,
      left: x,
      right: x + width
    }
  }

  if (styles && styles.position === 'fixed' && top > scrollY) {
    return {
      left: styles.left,
      right: styles.right,
      width: styles.width
    }
  }

  return null
}

export default function positionerFactory (position) {
  return (params) => {
    if (position === 'top') return positionTop(params)
    return null
  }
}
