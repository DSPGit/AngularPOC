import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})

export class EventsListComponent {
    constructor() { }

    title:string ="Synechron Events!";
    subTitle:string="List of all the events"

}