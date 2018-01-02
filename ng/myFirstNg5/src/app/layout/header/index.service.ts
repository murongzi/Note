import { Injectable } from '@angular/core';
import { ApiSercive } from '../../../lib/api.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderService {
    constructor(
        private apiRequest: ApiSercive
    ) {
    }

    getUserInfo():Observable<any> {
        return this.apiRequest.request({
            _mt:'renault.getTreatmentDetail4web',
            treatmentId:1
        });
    }

    getUser():Observable<any> {
        return this.apiRequest.request({
            _mt:'pentos.getMerchantById',
            merchantId:21256530600
        });
    }
}