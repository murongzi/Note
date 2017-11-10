import App from './App'
import HomeComponent from './component/Home'

App.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state({
        name:'hello',
        url:'/hello',
        component:HomeComponent
    })

    $stateProvider.state({
        name:'about',
        url:'/about',
        template:"asdfasdfasdfasdf"
    })
}])