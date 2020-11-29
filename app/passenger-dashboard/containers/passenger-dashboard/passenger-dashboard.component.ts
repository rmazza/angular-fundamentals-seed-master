import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div class="app">
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail>
      </passenger-detail>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date: 
            {{ passenger.checkedIn ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase ) : 'N/A' }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() { }

  ngOnInit() {
    this.passengers = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: null
      }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkedInDate: null,
        children: [{
          name: 'Charles',
          age: 10
        }]
      },{
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: null
      }]
  }
}