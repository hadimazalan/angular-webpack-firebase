import angular from 'angular';
import angularMaterial from 'angular-material';
import constants from './constants';
import Login from './modules/login/login';
import Main from './modules/main/main';

//firebase config
import 'angularfire';
import firebase from './common/firebase.service';

import '../style/app.css';
import '../../node_modules/angular-material/angular-material.css';

let dependencies = [
    angularMaterial,
    'firebase',
    firebase.name,
    Main.name,
    Login.name
];

angular.module(constants.APP_NAME, dependencies);

export default constants.APP_NAME;