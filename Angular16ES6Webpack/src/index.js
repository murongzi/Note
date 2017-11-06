import Angular from 'angular'
import UiRouter from 'angular-ui-router'

let myApp = Angular.module('helloApp', [UiRouter])

import HomeComponent from './component/Home'

//App.component('helloTom', HomeComponent)

myApp.config(['$stateProvider', ($stateProvider) => {

    $stateProvider.state({
        name:'hello',
        url:'/hello',
        //component:HomeComponent(myApp)
        component:'helloTom'
    })

    $stateProvider.state({
        name:'about',
        url:'/about'
    })
}]).component('helloTom', HomeComponent)