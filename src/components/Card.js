import { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Card({ path, title, createdAt, user, id }) {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(`/images/${id}`, { state: { id } })
  }

  const timestamp = useMemo(() => {
    const date = `${new Date(createdAt?.seconds * 1000)}`.split(' ')
    return `${date[1]} ${date[2]} ${date[3]}`
  }, [])
  return (
    <div className='mb-5' onClick={handleOnClick}>
      <div className='card' style={{ width: '18rem' }}>
        <div
          style={{
            height: '18rem',
            backgroundImage: `url(${path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <h5 className='text-center mt-1'>{title}</h5>
      </div>
    </div>
  )
}
export default Card
