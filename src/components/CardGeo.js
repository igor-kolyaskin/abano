function CardGeo({ lt, ln, zoom, geoId, geoTitle, title, description }) {
  const coordinates = lt && ln ? `${lt},${ln}` : '0,0'

  const TestDiv = () => {
    return (
      <>
        <div>AAA</div>
        <a href='https://www.youtube.com/watch?v=lfyYKPD0h0Q'>Video</a>
        <div>BBB</div>
      </>
    )
  }

  return (
    <div
      className='mb-3'
      style={{ width: '20rem', paddingLeft: 0, paddingRight: 0 }}
    >
      <div className='card' style={{ width: '18.1rem' }}>
        <gmp-map
          center={coordinates}
          zoom={zoom}
          map-id={geoId}
          style={{ height: '18rem' }}
        >
          <gmp-advanced-marker
            position={coordinates}
            title={geoTitle}
          ></gmp-advanced-marker>
        </gmp-map>
        <div className='text-start ps-1 fs-6 mt-1'>
          <TestDiv />
        </div>
      </div>
    </div>
  )
}
export default CardGeo
