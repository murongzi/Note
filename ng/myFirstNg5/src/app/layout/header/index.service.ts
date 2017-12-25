import { Injectable } from '@angular/core';

import  ApiSercive  from '../../../lib/api.service';

@Injectable()
export class HeaderService {
    constructor() {
        ApiSercive('HeaderService')
    }

    getUserInfo() {
        console.log('getUserInfo');
    }
}