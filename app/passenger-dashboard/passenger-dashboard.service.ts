import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService {
    constructor() {}

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