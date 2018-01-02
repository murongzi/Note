import {NgModule} from '@angular/core';
import { 
    HeaderComponent, 
    ContainerComponent, 
    FooterComponent, 
    HeaderService, 
    CountClicks
} from './'
import { 
    PanelComponent,

    AdBannerComponent,
    AdDirective,
    AdService, 
    HeroJobAdComponent,
    HeroProfileComponet
} from '../component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[CommonModule],
    declarations:[
        HeaderComponent,
        ContainerComponent,
        FooterComponent, PanelComponent, CountClicks,
        AdBannerComponent, AdDirective, HeroJobAdComponent, HeroProfileComponet
    ],
    //必须要把这三个组件exports出去，否则会出现自定义标签名为定义的问题
    exports:[HeaderComponent, ContainerComponent, FooterComponent, PanelComponent],
    entryComponents:[HeroJobAdComponent, HeroProfileComponet],
    providers:[HeaderService, AdService]
})
export class LayoutModule {
    constructor() {

    }
}