import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyA819HPi6npWRUiQKKsKnM33NE2KbvQU-E",
    authDomain: "goctruyenapp.firebaseapp.com",
    databaseURL: "https://goctruyenapp.firebaseio.com",
    projectId: "goctruyenapp",
    storageBucket: "goctruyenapp.appspot.com",
    messagingSenderId: "629723304687",
    appId: "1:629723304687:web:22275aac0bb3dd9098411a",
    measurementId: "G-W0G9T4M6FZ"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);