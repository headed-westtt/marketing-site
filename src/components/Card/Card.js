import Draggable from 'react-draggable'

export default function Card({ info }) {
  const { title, description, photoUrl, photoAlt, index } = info

  const getDefaultPosition = () => {
    const x =
      window.innerWidth / 2 -
      120 +
      Math.random() * 240 * (Math.round(Math.random()) ? 1 : -1)
    const y =
      window.innerHeight / 2 -
      150 +
      Math.random() * 75 * (Math.round(Math.random()) ? 1 : -1)

    return { x, y }
  }

  return (
    <Draggable bounds='parent' defaultPosition={getDefaultPosition()}>
      <div className='card' style={{ zIndex: index }}>
        <div
          className='card_img'
          style={{ backgroundImage: `url(${photoUrl})` }}
          role='img'
          aria-label={photoAlt}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Draggable>
  )
}
