import {
    Component,
    OnInit
} from '@angular/core';

import { AdItem, AdService } from '../../component';

@Component({
    selector: 'app-footer',
    templateUrl: './index.component.html'
})
export class FooterComponent implements OnInit {
    public ads: AdItem[];

    constructor(
        private adService:AdService
    ) { }

    ngOnInit() {
        this.ads = this.adService.getAds()
    }

}