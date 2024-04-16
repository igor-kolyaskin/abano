function CardGeo() {
  const textStyle = 'text-start ps-1 fs-6'
  const cardText = 'geo'

  return (
    <div
      className='mb-3'
      style={{ width: '20rem', paddingLeft: 0, paddingRight: 0 }}
    >
      <div className='card' style={{ width: '18.1rem' }}>
        <div
          style={{
            height: '18rem',
            backgroundColor: 'maroon',
          }}
        ></div>
        <h5 className={`${textStyle} mt-1`}>{cardText}</h5>
      </div>
    </div>
  )
}
export default CardGeo
