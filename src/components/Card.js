import { useNavigate } from 'react-router-dom'

function Card({ path, title, createdAt, user, id }) {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(`/images/${id}`, { state: { id } })
  }

  return (
    <div className='mb-5' onClick={handleOnClick}>
      <div className='card' style={{ width: '18.1rem' }}>
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
