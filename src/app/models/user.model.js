import angular from 'angular';

class UserModel {
    constructor() {
        this.users = [];
        this.user = {
            uid: '',
            displayName: '',
            photoUrl: '',
            email: ''
        }
    }
}

export default angular.module('models.user', [])
    .service('user', UserModel);