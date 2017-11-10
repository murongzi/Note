import homeService from './home.service'
import { debug } from 'util';

export default class HelloController {
    static $inject = ['$scope', '$interval', 'HomeService'];

    constructor($scope, $interval, HomeService){
        this.HomeService = HomeService;

        $interval(() => {
            this.message = 'HelloController' + (+new Date);

            $scope.random = Math.random()
        }, 100)
    }

    $onInit() {
        console.log('controller 初始化操作');
    }

    queryData() {
        this.HomeService.queryPeople().then(({data:{peoples}}) => {
            this.people = peoples;
        });
    }
}
