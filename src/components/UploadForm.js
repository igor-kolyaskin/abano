import { useMemo } from 'react'
import Preview from './preview'
import { useContext } from 'react'
import { Context } from '../context/FirestoreContext'
import { useAuthContext } from '../context/AuthContext'
import Firestore from '../handlers/firestore'
import Storage from '../handlers/storage'

const { writeDoc} = Firestore
const { uploadFile, downloadFile } = Storage

const UploadForm = () => {
  const { state, dispatch, read } = useContext(Context)
  const { inputs, isCollapsed } = state
  const { currentUser } = useAuthContext()
  const username = currentUser?.displayName.split(' ').join('')

  const onChange = e => dispatch({ type: 'setInputs', payload: { value: e } })
  const onSubmit = e => {
    e.preventDefault()
    uploadFile(inputs)
      .then(downloadFile)
      .then(url => {
        writeDoc(
          { ...inputs, path: url, user: username.toLowerCase() },
          'StockImages'
        ).then(() => {
          read()
          // dispatch({ type: 'setItem' })
          dispatch({ type: 'collapse', payload: { bool: false } })
        })
      })
  }

  const isDisabled = useMemo(() => {
    return !!Object.values(inputs).some(input => !input)
  }, [inputs])
  return (
    isCollapsed && (
      <>
        <p className='display-6 text-center mb-3'>Upload StockImages Image</p>
        <div className='mb-5 d-flex align-items-center justify-content-center'>
          <Preview />
          <form
            className='mb-2'
            style={{ textAlign: 'left' }}
            onSubmit={onSubmit}
          >
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                name='title'
                placeholder='title'
                aria-describedby='text'
                onChange={onChange}
              />
            </div>
            <div className='mb-3'>
              <input
                type='file'
                className='form-control'
                name='file'
                onChange={onChange}
              />
            </div>
            <button
              type='submit'
              className='btn btn-success float-end'
              disabled={isDisabled}
            >
              Save and upload
            </button>
          </form>
        </div>
      </>
    )
  )
}
export default UploadForm
