import App from '../../App'

import template from './home.html'
import controller from './home.controller'

App.component('helloTom', {
    template,
    controller,
    controllerAs:'vm'
})

export default "helloTom"
