import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/module';
import { HttpModule } from '@angular/http';
import { HttpClientModule/* , HTTP_INTERCEPTORS */ } from '@angular/common/http';
/* import { HttpInterceotorService } from '../lib/http.interceotor.service'; */

import { ApiSercive } from '../lib/api.service';

@NgModule({
    imports: [BrowserModule, LayoutModule, HttpModule, HttpClientModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        /* {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceotorService,
            multi: true
        }, */
        ApiSercive
    ]
})
export class AppModule {
    constructor() { }


}