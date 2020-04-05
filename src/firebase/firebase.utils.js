import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBB70iHHo8OwxFKEuJ7lhEdQQx9IQx5l1M',
  authDomain: 'staysharp-251cb.firebaseapp.com',
  databaseURL: 'https://staysharp-251cb.firebaseio.com',
  projectId: 'staysharp-251cb',
  storageBucket: 'staysharp-251cb.appspot.com',
  messagingSenderId: '222160648858',
  appId: '1:222160648858:web:9183ab0193f9722a3cbd23',
  measurementId: 'G-1MH4VLHX14'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log(e);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
