import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['./passenger-viewer.component.scss'],
    template: `
        <div>
            <passenger-form
                [detail]="passenger"
                (update)="onUpdatePassenter($event)">
            </passenger-form>
        </div>
    `
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(
        private passengerService: PassengerDashboardService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
            .subscribe((data: Passenger) => this.passenger = data );
     }

     onUpdatePassenter(event) {
         this.passengerService.updatePassenger(event)
         .subscribe( (data: Passenger) => {
             this.passenger = Object.assign({}, this.passenger, event);
         });
     }
}