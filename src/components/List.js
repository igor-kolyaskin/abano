import Card from './Card'
import CardGeo from './CardGeo'
import parseGeoData from '../handlers/parseGeoData'
import { useMemo } from 'react'

const List = ({ items, pageType }) => {
  const isSinglePage = pageType === 'single'
  const list = useMemo(() => {
    const cards = items
      .filter(item => item?.order !== 'z')
      .sort((item1, item2) => item1.order - item2.order)
    const geoCard = items.find(item => item?.order === 'z')
    const geoData = {
      ...parseGeoData(geoCard?.path),
      title: geoCard?.title,
      description: geoCard?.description,
    }
    return { cards, geoData }
  }, [items])

  return (
    <div className='row mt-3'>
      {list['cards'].map((item, index) => {
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
      {isSinglePage && <CardGeo {...list.geoData} />}
    </div>
  )
}
export default List
