import App from '../../App'

export default class HomeService {
    static $inject = ['$http'];

    constructor($http){
        this.$http = $http;
    }

    queryPeople() {
        return this.$http({
            url:'../../mock/data.json',
            method:'get'
        })
    }
}

App.service('HomeService', HomeService)

