import { useMemo } from 'react'

function Card({ path, title, createdAt }) {
  const timestapm = useMemo(() => {
    const date = new Date(createdAt.seconds * 1000)
    return `${new Date(createdAt.seconds * 1000)}`
  }, [])
  return (
    <div className='col mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <div
          style={{
            height: '220px',
            backgroundImage: `url(${path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <h5 className='text-center'>{title}</h5>
        <p>{timestapm}</p>
      </div>
    </div>
  )
}
export default Card
