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
  measurementId: 'G-1MH4VLHX14',
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

export const addCollectionAndDocuments = async (collectionKey, itemsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  itemsToAdd.forEach((item) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
