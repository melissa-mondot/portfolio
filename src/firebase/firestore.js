// call Firebase
import firebase from 'firebase/app';

// active Firebase services
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// initialize Firebase and Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Data set sent to Firestore
export const createMessage = (contactName, contactEmail, contactMsg) => {
  const timestamp = new Date();
  return db.collection('contactForm').add({
    createAt: timestamp,
    name: contactName,
    email: contactEmail,
    msg: contactMsg,
  });
};
