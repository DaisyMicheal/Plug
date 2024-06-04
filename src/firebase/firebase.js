import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCwiXOpdV4fxHrA6VePgSQxfPHGQHkiaBg',
  authDomain: 'plug-66196.firebaseapp.com',
  databaseURL: 'https://plug-66196-default-rtdb.firebaseio.com',
  projectId: 'plug-66196',
  storageBucket: 'plug-66196.appspot.com',
  messagingSenderId: '385157113263',
  appId: '1:385157113263:web:d1e5d315ca240d9e3d7b5a',
  measurementId: 'G-F8RYYXFXWD',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
