import {
  setDoc,
  doc,
  collection,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore'
import { db } from '../lib/firebase.config'

const Firestore = {
  readDocs: (...args) => {
    const [collection_name] = args
    let docs = []
    const ref = collection(db, collection_name)
    return new Promise(async resolve => {
      try {
        const snapshots = await getDocs(ref)
        snapshots.forEach(doc => {
          const d = { ...doc.data(), id: doc.id }
          docs.push(d)
        })
        resolve(docs)
      } catch (error) {
        console.log(`db reading error: ${error}`)
      }
    })
  },
  writeDoc: (...args) => {
    const [inputs, collection_name] = args

    return new Promise(async resolve => {
      const randomIndex = Math.floor(Math.random() * 1000000000)
      try {
        const docRef = doc(db, collection_name, `${randomIndex}`)
        const { title, path, user, parentId, order, description } = inputs
        await setDoc(docRef, {
          title,
          path,
          createdAt: serverTimestamp(),
          user,
          parentId,
          order,
          description,
        })
        resolve('new doc successfully inserted')
      } catch (error) {
        console.log(`db reading error: ${error}`)
      }
    })
  },
}
export default Firestore
