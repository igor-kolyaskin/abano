function CardText({ data }) {
  let cardText = null
  console.log(data)
  if (data && typeof data === 'string') {
    cardText = <div className='text-start ps-1 fs-6 mt-1'>{data}</div>
  } else if (data && Array.isArray(data)) {
    cardText = (
      <div className='text-start ps-1 fs-6 mt-1'>
        {data?.map(e => {
          switch (e.type) {
            case 'span':
              return <span>{e.innerText}</span>
            case 'a':
              return <a href={e.href}>{e.innerText}</a>
            default:
              return <div>Error</div>
          }
        })}
      </div>
    )
  }
  return cardText
}
export default CardText
