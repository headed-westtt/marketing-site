import Draggable from 'react-draggable'

export default function Card({ info }) {
  const { title, description, photoUrl, photoAlt } = info
  return (
    <Draggable>
      <div className='card'>
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
