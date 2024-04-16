function CardGeo({lt, ln, zoom, geoId, geoTitle}) {
  const cardText = 'geo'

  return (
    <div
      className='mb-3'
      style={{ width: '20rem', paddingLeft: 0, paddingRight: 0 }}
    >
      <div className='card' style={{ width: '18.1rem' }}>
        <gmp-map
          center='41.68861389160156,44.81126022338867'
          zoom='14'
          map-id='DEMO_MAP_ID'
          style={{ height: '18rem' }}
        >
          <gmp-advanced-marker
            position='41.68861389160156,44.81126022338867'
            title='My location'
          ></gmp-advanced-marker>
        </gmp-map>
        <h5 className='text-start ps-1 fs-6 mt-1'>{cardText}</h5>
      </div>
    </div>
  )
}
export default CardGeo
