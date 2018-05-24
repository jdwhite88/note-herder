import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import Rebase from 're-base';

const config = {
    apiKey: "AIzaSyBGUUB1byhESYZwkzQLm8HAUqrcnx2G2_o",
    authDomain: "noteherder-2eb30.firebaseapp.com",
    databaseURL: "https://noteherder-2eb30.firebaseio.com",
    projectId: "noteherder-2eb30",
    storageBucket: "noteherder-2eb30.appspot.com",
    messagingSenderId: "247039348909"
};
const app = firebase.initializeApp(config);
export const auth = firebase.auth();

export const githubProvider = new firebase.auth.GithubAuthProvider();

export default Rebase.createClass(app.database());