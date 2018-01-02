import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
    template:`
        <div>
            <h3>Hero Profile</h3>
            <h4>{{data.name}}</h4>
            <p>{{data.bio}}</p>
            <strong>hire this hero today!</strong>
        </div>
    `
})
export class HeroProfileComponet implements AdComponent {
    @Input() data: any
}