import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import { environments } from '~/plugins/environments'

if (firebase.apps.length === 0) {
  firebase.initializeApp(environments.firebaseOptions)
}

export default (context, inject: (name: string, v: any) => any) => {
  inject('firebase', firebase)
  inject('auth', firebase.auth)
  inject('firestore', firebase.firestore)
}
