import Vue from 'vue'
import { FirebaseApp } from '@firebase/app-types'
import { FirebaseAuth } from '@firebase/auth-types'
import { FirebaseFirestore } from '@firebase/firestore-types'
import { EnvironmentVariables } from '~/plugins/environments'

declare module 'vue/types/vue' {
  interface Vue {
    $environments: EnvironmentVariables
    $firebase: FirebaseApp
    $auth: FirebaseAuth
    $firestore: FirebaseFirestore
  }
}
