const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDojITAxcXmLiqOIPF7cXnZq0PAxsq5IOM",
  authDomain: "skipli-test.firebaseapp.com",
  projectId: "skipli-test",
  storageBucket: "skipli-test.appspot.com",
  messagingSenderId: "185436079923",
  appId: "1:185436079923:web:868503fb849ec69b286046",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**
 * @param {FirebaseFirestore.Firestore} db
 */
const db = getFirestore(app);

module.exports = db;
