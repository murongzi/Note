import {Component, Output} from '@angular/core';
import { HeaderService } from './index.service';
//import { HeaderService } from '../index';

@Component({
    selector:'app-header',
    templateUrl:'./index.component.html'
})
export class HeaderComponent{
    @Output()
    pageTitle:{
        title:"test"
    }

    constructor(
        private headerService: HeaderService
    ) {}

    onClick() {
        this.headerService.getUserInfo();
    }
}