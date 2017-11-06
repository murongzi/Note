export default class HelloController {
    constructor($scope, $interval){
        $interval(() => {
            this.message = 'HelloController' + (+new Date);

            $scope.random = Math.random()
        }, 100)
    }
}

HelloController.$inject = ['$scope', '$interval'];