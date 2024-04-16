import Card from './Card'
import CardGeo from './CardGeo'

const List = ({ items, pageType }) => {
  const isHomePage = pageType === 'general'

  return (
    <div className='row mt-3'>
      {items.map((item, index) => {
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
      {!isHomePage && <CardGeo />}
    </div>
  )
}
export default List
