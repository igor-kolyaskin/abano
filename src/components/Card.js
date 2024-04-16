import { useNavigate } from 'react-router-dom'

function Card({ path, title, description, pageType, id }) {
  const navigate = useNavigate()
  const isHomePage = pageType === 'general'
  const cursorStyle = isHomePage ? 'pointer' : 'default'
  const textStyle = isHomePage ? 'text-center' : 'text-start ps-1 fs-6'
  const cardText = isHomePage ? title : description

  const handleOnClick = () => {
    if (!isHomePage) return
    navigate(`/images/${id}`, { state: { id } })
  }

  return (
    <div
      className='mb-3'
      onClick={handleOnClick}
      style={{ cursor: cursorStyle }}
    >
      <div className='card' style={{ width: '18.1rem' }}>
        <div
          style={{
            height: '18rem',
            backgroundImage: `url(${path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <h5 className={`${textStyle} mt-1`}>{cardText}</h5>
      </div>
    </div>
  )
}
export default Card
