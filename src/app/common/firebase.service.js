import angular from 'angular';
import Firebase from 'firebase';
import firebaseConfig from './../firebase.config';

Firebase.initializeApp(firebaseConfig);

const ref = Firebase.database().ref();

class FirebaseManager {
    constructor() {
        this.ref = ref;
        this.auth = Firebase.auth();

        this.googleAuth = (cb, eCb) => {
            let provider = new Firebase.auth.GoogleAuthProvider();
            this.auth.signInWithPopup(provider).then(function (authData) {
                debugger;
                cb(authData);
            }).catch(function (error) {
                console.log('error', error);
                eCb(error);
            });
        }
    }
}
// FirebaseManager.$inject = ['$firebaseAuth', '$firebaseObject', '$firebaseArray'];
export default angular.module('common.firebase', []).service('firebase', FirebaseManager);