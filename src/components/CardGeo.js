import CardText from './CardText'

function CardGeo({ lt, ln, zoom, geoId, geoTitle, title, description }) {
  const coordinates = lt && ln ? `${lt},${ln}` : '0,0'
  return (
    <div
      className='mb-3'
      style={{ width: '20rem', paddingLeft: 0, paddingRight: 0 }}
    >
      <div className='card' style={{ width: '18.1rem' }}>
        {/* <gmp-map
          center={coordinates}
          zoom={zoom}
          map-id={geoId}
          style={{ height: '18rem' }}
        >
          <gmp-advanced-marker
            position={coordinates}
            title={geoTitle}
          ></gmp-advanced-marker>
        </gmp-map> */}
        <CardText data={description} />
      </div>
    </div>
  )
}
export default CardGeo
