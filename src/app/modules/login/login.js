import angular from 'angular';
import LoginSidebar from './login-sidebar/login-sidebar';

import './login.css';

class LoginCtrl {
    constructor() {
        console.log('login controller');
        this.name = 'teste';
    }
}

let LoginComponent = {
    controller: LoginCtrl,
    template: require('./login.html')
};

let dependencies = [
    LoginSidebar.name
];

export default angular.module('login', dependencies).component('login', LoginComponent);