import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HeaderService } from './layout/index';

@Component({
    selector:'app-main',
    templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit, AfterContentInit{
    constructor(
        private headerService: HeaderService
    ) {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

    onClick() {
        this.headerService.getUserInfo();
    }
}