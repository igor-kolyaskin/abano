import { useContext } from 'react'
import { Context } from '../context/FirestoreContext'

const Preview = () => {
  const { state } = useContext(Context)
  const {
    inputs: { path },
  } = state

  return (
    path && (
      <div
        className='rounded p-1 m-5'
        style={{
          width: '30%',
          height: '300px',
          backgroundImage: `url(${path}`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    )
  )
}
export default Preview
