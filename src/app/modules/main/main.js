import angular from 'angular';

import './main.css';

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

let App = {
    template: require('./main.html'),
    controller: AppCtrl
};

export default angular.module('main', []).component('main', App);