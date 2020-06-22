import firebase from 'firebase';


 var firebaseConfig = {
    apiKey: "AIzaSyD7P4Rd5vBTO8GeSbhpqBA8SyCxy8tVGUE",
    authDomain: "nm-website-10062.firebaseapp.com",
    databaseURL: "https://nm-website-10062.firebaseio.com",
    projectId: "nm-website-10062",
    storageBucket: "nm-website-10062.appspot.com",
    messagingSenderId: "813452328686",
    appId: "1:813452328686:web:92a038072dca34c2f8fdff",
    measurementId: "G-S1ZC051H7V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
