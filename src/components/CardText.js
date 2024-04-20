function CardText({ data }) {
  const cardText =
    data && data.includes('|&|') ? (
      <ParsedText text={data} />
    ) : (
      <div className='text-start ps-1 fs-6 mt-1'>{data}</div>
    )

  function ParsedText({ text }) {
    const compArray = text.split('|&|')
    const parsedText = (
      <div className='text-start ps-1 fs-6 mt-1'>
        {compArray.map((compString, index) => {
          const compParts = compString.split('|')
          switch (compParts[0]) {
            case 'span':
              return <span index={index}>{compParts[1]}</span>
            case 'a':
              return (
                <a index={index} href={compParts[2]}>
                  {compParts[1]}
                </a>
              )
            default:
              return <div index={index}>{compParts[1]}</div>
          }
        })}
      </div>
    )

    return parsedText
  }
  return cardText
}
export default CardText

const example =
  `span|Вот отличное 
  |&|
  a|видео|https://www.youtube.com/watch?v=lfyYKPD0h0Q
  |&|
  span| про это заведение`
// convention:
// 1) components devider is |&|
// 2) inside a component devider is |
// 3) the first part is component type like span, div, a
// 4) the second part is innerText
// 5) the third part is href for a
