import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    template: `
    <div>
    <span class="status" [class.checked-in]="detail.checkedIn"></span>
          {{ detail.fullname }}
          <p>{{ detail | json }}</p>
          <div class="date">
            Check in date: 
            {{ detail.checkedIn ? (detail.checkedInDate | date: 'yMMMMd' | uppercase ) : 'N/A' }}
          </div>
          <div class="children">
            Children: {{ detail.children?.length || 0 }}
          </div>
    </div>
    `
})
export class PassengerDetailComponent {

    @Input()
    detail: Passenger;

    constructor() { }
}