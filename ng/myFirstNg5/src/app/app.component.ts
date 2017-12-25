import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HeaderService } from './layout/index';
import  ApiSercive  from '../lib/api.service';

@Component({
    selector:'app-main',
    templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit, AfterContentInit{
    constructor(
        private headerService: HeaderService
    ) {
        ApiSercive('AppComponent')
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

    onClick() {
        this.headerService.getUserInfo();
    }
}