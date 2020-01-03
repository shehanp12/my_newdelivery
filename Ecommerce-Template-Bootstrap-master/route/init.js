

var firebaseConfig = {
    apiKey: "AIzaSyDM595eUaA7jbvlrrCdi920LUOTa-30t80",
    authDomain: "coffeeshop-4cf38.firebaseapp.com",
    databaseURL: "https://coffeeshop-4cf38.firebaseio.com",
    projectId: "coffeeshop-4cf38",
    storageBucket: "coffeeshop-4cf38.appspot.com",
    messagingSenderId: "966275901816",
    appId: "1:966275901816:web:65ee85b80fc456d3ad008d"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

