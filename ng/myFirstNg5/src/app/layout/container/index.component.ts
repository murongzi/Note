import {
    Directive, Component,
    ContentChild, AfterContentInit,
    OnInit, OnDestroy, OnChanges,
    AfterViewInit, QueryList, ViewChildren,
    EventEmitter
} from '@angular/core';
import { PanelComponent } from '../../component';

@Directive({
    selector: 'button[counting]',
    host: {
        '(click)': 'onClick($event.target)',
        'href': 'www.baidu.com'
    },
    inputs: [
        'name'
    ],
    outputs: [
        'onChange'
    ]
})
export class CountClicks {
    onChange = new EventEmitter()
    numberOfClicks = 0;
    constructor() {}

    onClick(btn) {
        console.log('button', btn, 'number of clicks:', this.numberOfClicks++);

        this.onChange.emit('event');
    }
}

@Component({
    selector: 'app-container',
    /* template:'<button counting>Click Me from container</button>', */
    templateUrl: './index.component.html',
})
export class ContainerComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    @ViewChildren(PanelComponent) panel: QueryList<PanelComponent>;
    @ContentChild(PanelComponent) panel2: PanelComponent;

    ngOnInit() {
    }

    ngOnDestroy() {

    }

    ngOnChanges() {

    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.panel;
        }, 3000);
    }

    ngAfterContentInit() {
        this.panel2
    }
}