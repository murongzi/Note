import {NgModule} from '@angular/core';
import { HeaderComponent, ContainerComponent, FooterComponent, HeaderService, CountClicks } from './'
import { PanelComponent } from '../component';

@NgModule({
    imports:[],
    declarations:[
        HeaderComponent,
        ContainerComponent,
        FooterComponent, PanelComponent, CountClicks
    ],
    //必须要把这三个组件exports出去，否则会出现自定义标签名为定义的问题
    exports:[HeaderComponent, ContainerComponent, FooterComponent, PanelComponent],
    entryComponents:[],
    providers:[HeaderService]
})
export class LayoutModule {
    constructor() {

    }
}