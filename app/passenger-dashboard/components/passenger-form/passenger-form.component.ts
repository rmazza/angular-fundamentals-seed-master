import { Component, Input } from "@angular/core";

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            {{ detail | json }}
            <div>
                Passenger name:
                <input
                    type="text"
                    name="fullname"
                    [ngModel]="detail?.fullname">
            </div>
            <div>
                Passenger id:
                <input
                    type="number"
                    name="id"
                    [ngModel]="detail?.id">
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        [value]="true"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        [value]="false"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                    No
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input 
                    type="number"
                    name="checkedInDate"
                    [ngModel]="detail?.checkedInDate">

            </div>

            <div>
                Luggage:
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === detail?.baggage">
                        {{ item.value }}
                    </option>
                </select>
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [ngValue]="item.key">
                        {{ item.value }}
                    </option>
                </select>
            </div>
            {{ form.value | json }}
        </form>
        `
})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    }, {
        key: 'hand-only',
        value: 'Hand baggage'
    }, {
        key: 'hold-only',
        value: 'hold baggage'
    }, {
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }];

    constructor() { }

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn){
            this.detail.checkedInDate = Date.now();
        }
    }
}