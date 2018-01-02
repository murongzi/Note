import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroProfileComponet } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad.component';

@Injectable()
export class AdService {
    getAds() {
        return [
            new AdItem(HeroProfileComponet, {name:'Jack', bio:'they come'}),
            new AdItem(HeroProfileComponet, {name:'Bob', bio:'smart'}),
            new AdItem(HeroJobAdComponent, {headline:'Hiring for several positions', body:'Submit your resume today!'}),
            new AdItem(HeroJobAdComponent, {headline:'Openings in all departments', body:'Apply today'})
        ]
    }
}