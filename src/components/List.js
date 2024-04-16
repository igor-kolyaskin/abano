import Card from './Card'
import CardGeo from './CardGeo'
import parseGeoData from '../handlers/parseGeoData'

const List = ({ items, pageType }) => {
  const isSinglePage = pageType === 'single'
  const cardItems = items.filter(item => item?.order !== 'z')
  const geoCard = items.find(item => item?.order === 'z')
  const geoData = parseGeoData(geoCard?.path)

  return (
    <div className='row mt-3'>
      {cardItems.map((item, index) => {
        return (
          <div
            key={index}
            className=' mb-2'
            style={{ width: '20rem', paddingLeft: 0, paddingRight: 0 }}
          >
            <Card {...item} pageType={pageType} />
          </div>
        )
      })}
      {isSinglePage && <CardGeo geoData={geoData} />}
    </div>
  )
}
export default List
