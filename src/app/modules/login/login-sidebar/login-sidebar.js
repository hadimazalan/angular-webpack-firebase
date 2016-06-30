import angular from 'angular';
import UserModel from './../../../models/user.model';

import './login-sidebar.css';

class LoginCtrl {
    constructor(firebase, user) {
        this.firebase = firebase;
        this.user = user;
        debugger;
    }

    createAccount() {
        this.firebase.googleAuth(data => {
            debugger;
            this.user.user.uid = data.user.uid;
            this.user.user.displayName = data.user.displayName;
            this.user.user.photoUrl = data.user.photoUrl;
            this.user.user.email = data.user.email;

            console.log('enter');
        }, ()=> {
            console.log('some error');
        });
    }
}

let Login = {
    template: require('./login-sidebar.html'),
    controller: LoginCtrl,
    controllerAs: 'login'
};
LoginCtrl.$inject = ['firebase', 'user'];

export default angular.module('loginSidebar', [UserModel.name]).component('loginSidebar', Login);