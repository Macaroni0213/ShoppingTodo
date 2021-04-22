import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    ///この間を自分のアプリ情報に変える
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
    //-------------------------------
  })
}

export default firebase