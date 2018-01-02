import {
    Directive, Component,
    ContentChild, AfterContentInit,
    OnInit, OnDestroy, OnChanges,
    AfterViewInit, QueryList, ViewChildren,
    EventEmitter,
    ElementRef,
    Renderer,
    HostListener,
    ViewContainerRef,
    TemplateRef,
    ViewChild
} from '@angular/core';
import { PanelComponent } from '../../component';

@Directive({
    selector: 'button[counting]',
    host: {
        '(mouseup)': 'onMouseUp($event.target)',
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

    constructor(
        private el:ElementRef,
        private render:Renderer,
        private viewContainerRef: ViewContainerRef
    ) {}

    @HostListener('mouseenter') onMouseEnter() {
        console.log('@HostListener onMouseEnter');
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log('@HostListener onMouseLeave');
    }

    @HostListener('click') onClick() {
        this.viewContainerRef;
    }

    onMouseUp(btn) {
        this.render.setElementStyle(this.el.nativeElement, 'color', 'red');

        console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
        this.onChange.emit('event');
    }
}

@Component({
    selector: 'app-container',
    /* template:'<button counting>Click Me from container</button>', */
    templateUrl: './index.component.html'
})
export class ContainerComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    @ViewChildren(PanelComponent) panel: QueryList<PanelComponent>;
    @ContentChild(PanelComponent) panel2: PanelComponent;
    @ViewChild('defaultTemplate') templateRef: TemplateRef<any>;

    public items:Array<string> = ['123', '222', '333'];

    constructor(
        private el:ElementRef,
        private render:Renderer,
        private viewContainerRef: ViewContainerRef
    ){}

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    onDirectiveEvent() {
        this.viewContainerRef.createEmbeddedView(this.templateRef);

        this.templateRef
        this.el;
        this.render;
    }

    onRemoveClick() {
        this.viewContainerRef.clear();
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