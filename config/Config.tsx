import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth,} from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAdXhcfT_ACxa1TR5ZnCN93ZAne2OT6g2I",
    authDomain: "jv-prueba.firebaseapp.com",
    projectId: "jv-prueba",
    storageBucket: "jv-prueba.appspot.com",
    messagingSenderId: "757652309308",
    appId: "1:757652309308:web:a19d00b2a52497c67a4a39"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  })


