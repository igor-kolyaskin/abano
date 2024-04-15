import Card from './Card'

const List = ({ items }) => {
  return (
    <div className='row mt-3'>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className=' mb-2'
            style={{ width: '20rem', paddingLeft: 0, paddingRight: 0 }}
          >
            <Card {...item} />
          </div>
        )
      })}
    </div>
  )
}
export default List
