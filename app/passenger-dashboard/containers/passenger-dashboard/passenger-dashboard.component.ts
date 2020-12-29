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
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
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

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map( (passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter( (passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}