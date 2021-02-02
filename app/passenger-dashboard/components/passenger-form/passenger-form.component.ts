import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
            {{ detail | json }}
            <div>
                Passenger name:
                <input
                    #fullname="ngModel"
                    type="text"
                    name="fullname"
                    required
                    [ngModel]="detail?.fullname">
                <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                    Passenger name is required
                </div>
            </div>
            <div>
                Passenger id:
                <input
                    #id="ngModel"
                    type="number"
                    name="id"
                    required
                    [ngModel]="detail?.id">
                <div *ngIf="id.errors?.required && id.touched" class="error">
                    Passenger id is required
                </div>
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
                <!-- <select
                    name="baggage"
                    [ngModel]="detail?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [ngValue]="item.key">
                        {{ item.value }}
                    </option>
                </select> -->
            </div>
            <!-- <div>{{ form.value | json }}</div>
            <div>Valid: {{ form.valid | json }}</div>
            <div>Invalid: {{ form.invalid | json }}</div> -->
            <button type="submit" [disabled]="form.invalid">
                Update passenger
            </button>
        </form>
        `
})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

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

    handleSubmit(passenger: Passenger, isValid: boolean) {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}