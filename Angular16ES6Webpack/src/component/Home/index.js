import HomeTemplate from './home.component.html'
import {controller} from './home.component.controller'

/* export default {
    template:HomeTemplate,
    controller() {
        this.application = +new Date
    }
} */

debugger
export default App => App.component('helloTom', {
    template:HomeTemplate,
    controller
}).name