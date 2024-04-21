function CardText({ data, textStyle }) {
  const cardText =
    data && data.includes('|&|') ? (
      <ParsedText text={data} />
    ) : (
      <div className={`${textStyle} mt-1`}>{data}</div>
    )

  function ParsedText({ text }) {
    const compArray = text.split('|&|')
    const parsedText = (
      <div className='text-start ps-1 fs-6 mt-1'>
        {compArray.map((compString, index) => {
          const compParts = compString.split('|')
          switch (compParts[0]) {
            case 'span':
              return <span key={index}>{compParts[1]}</span>
            case 'a':
              return (
                <a key={index} href={compParts[2]}>
                  {compParts[1]}
                </a>
              )
            default:
              return <div key={index}>{compParts[1]}</div>
          }
        })}
      </div>
    )

    return parsedText
  }
  return cardText
}
export default CardText
