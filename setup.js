import firebase from '@react-native-firebase/app';

const initialApp = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyC4aIVoyaoiBJnk5a2_IvJ6vBcdliNs0yY",
    authDomain: "movie-zone-afd2b.firebaseapp.com",
    projectId: "movie-zone-afd2b",
    storageBucket: "movie-zone-afd2b.appspot.com",
    messagingSenderId: "648639555360",
    databaseURL: "https://movie-zone-afd2b-default-rtdb.firebaseio.com",
    appId: "1:648639555360:web:ef705068b7bd6e5b475945"
}


export default initialApp;
