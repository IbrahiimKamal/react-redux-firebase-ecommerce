import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAWNkRCt217tNTV1mO8K_PY8Krr5dfCsik',
  authDomain: 'ecommercy1.firebaseapp.com',
  projectId: 'ecommercy1',
  storageBucket: 'ecommercy1.appspot.com',
  messagingSenderId: '737493530936',
  appId: '1:737493530936:web:9b30e4eff8eed4132ae9cd',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
