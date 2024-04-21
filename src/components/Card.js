import { useNavigate } from 'react-router-dom'
import CardText from './CardText'

function Card({ path, title, description, pageType, id }) {
  const navigate = useNavigate()
  const isHomePage = pageType === 'general'
  const cursorStyle = isHomePage ? 'pointer' : 'default'
  const textStyle = isHomePage ? 'text-center fs-5 fw-semibold pb-1' : 'text-start ps-1 fs-6'
  const textContent = isHomePage ? title : description

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
        <CardText data={textContent} textStyle={textStyle} />
      </div>
    </div>
  )
}
export default Card
