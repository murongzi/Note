import {Component} from '@angular/core';

import  ApiSercive  from '../../../lib/api.service';

@Component({
    selector:'app-footer',
    templateUrl:'./index.component.html'
})
export class FooterComponent{
    constructor(){
        ApiSercive('foot')
    }
}