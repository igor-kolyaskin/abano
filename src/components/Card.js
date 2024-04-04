function Card({ path, title }) {
  return (
    <div className='col mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={path} className='card-img-top' alt={title} />
        <div className='card-body'>
          <p className='card-text'> card text </p>
        </div>
      </div>
    </div>
  )
}
export default Card
