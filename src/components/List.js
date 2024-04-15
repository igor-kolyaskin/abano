import Card from './Card'

const List = ({ items }) => {
  return (
    <div className='row mt-3'>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className=' mb-5'
            style={{ width: '19rem', paddingLeft: 0, paddingRight: 0 }}
          >
            <Card {...item} />
          </div>
        )
      })}
    </div>
  )
}
export default List
