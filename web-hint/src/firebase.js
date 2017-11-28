import firebase from 'firebase';
const {
    HINT_APIKEY,
    HINT_PROJECTID,
    HINT_DATABASEURL
  } = process.env.HINT_APIKEY,
  config = {
    apiKey: HINT_APIKEY,
    databaseURL: HINT_DATABASEURL,
    projectId: HINT_PROJECTID,
    messagingSenderId: '144750278413'
  };
firebase.initializeApp(config);
export default firebase;
