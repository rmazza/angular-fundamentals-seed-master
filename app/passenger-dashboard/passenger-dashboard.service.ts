import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Passenger } from "./models/passenger.interface";

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {}

    getPassengers(): Passenger[] {
        return [{
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
        }];
    }
}