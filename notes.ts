// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//     <div class="app">
//       <button (click)="handleClick(username.value)">Get Value</button>
//       <input type="text" #username>
//       <div>{{name}}</div>
//     </div>
//   `
// })
// export class AppComponent {
//   name: string = "Bob";

//   handleClick(value: string) {
//     console.log(value);
//   }
// }

// ///////////////////////////////////////////////////

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//     <div class="app">
//       <input type="text" [(ngModel)]="name">

//       <!-- *ngIf: same as below -->
//       <template [ngIf]="name">
//         <div>
//           Searching for... {{name}}
//         </div>
//       </template>

//       <div *ngIf="name">
//         Searching for... {{name}}
//       </div>
//     </div>
//   `
// })
// export class AppComponent {
//   name: string = "";
// }

// ///////////////////////////////////////////////
// import { Component } from '@angular/core';

// interface Passenger {
//   id: number;
//   fullname: string;
//   checkedIn: boolean;
// }

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//     <div class="app">
//       <h3>Airline Passengers</h3>
//       <ul>
//         <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
//           <li>
//             {{ i }}: {{ passenger.fullname }}
//           </li>
//         </template>
//       </ul>
//       <h3>Airline Passengers</h3>
//       <ul>
//         <li *ngFor="let passenger of passengers; let i = index;">
//           {{ i }}: {{ passenger.fullname }}
//         </li>
//       </ul>
//     </div>
//   `
// })
// export class AppComponent {
//   passengers: Passenger[] = [{
//     id: 1,
//     fullname: 'Stephen',
//     checkedIn: true
//   }, {
//     id: 2,
//     fullname: 'Rose',
//     checkedIn: false
//   },{
//     id: 3,
//     fullname: 'James',
//     checkedIn: true
//   }]
// }

// /////////////////////////////////////////////////////
// // STYLES
// interface Passenger {
//   id: number;
//   fullname: string;
//   checkedIn: boolean;
// }

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//     <div class="app">
//       <h3>Airline Passengers</h3>
//       <ul>
//         <li *ngFor="let passenger of passengers; let i = index;">
//           <span class="status"
//           [class.checked-in]="passenger.checkedIn"></span>
//           {{ i }}: {{ passenger.fullname }}
//         </li>
//       </ul>
//       <h3>Airline Passengers</h3>
//       <ul>
//         <li *ngFor="let passenger of passengers; let i = index;">
//           <span class="status"
//           [ngClass]="{ 
//             'checked-in': passenger.checkedIn,
//             'checked-out': !passenger.checkedIn
//           }"></span>
//           {{ i }}: {{ passenger.fullname }}
//         </li>
//       </ul>
//       <h3>Airline Passengers</h3>
//       <ul>
//         <li *ngFor="let passenger of passengers; let i = index;">
//           <span class="status"
//           [style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red')"
//           ></span>
//           {{ i }}: {{ passenger.fullname }}
//         </li>
//       </ul>
//       <h3>Airline Passengers</h3>
//       <ul>
//         <li *ngFor="let passenger of passengers; let i = index;">
//           <span class="status"
//           [ngStyle]=" { backgroundColor: (passenger.checkedIn ? 'green' : 'red') }"
//           ></span>
//           {{ i }}: {{ passenger.fullname }}
//         </li>
//       </ul>
//     </div>
//   `
// })
// export class AppComponent {
//   passengers: Passenger[] = [{
//     id: 1,
//     fullname: 'Stephen',
//     checkedIn: true
//   }, {
//     id: 2,
//     fullname: 'Rose',
//     checkedIn: false
//   },{
//     id: 3,
//     fullname: 'James',
//     checkedIn: true
//   }]
// }

// /////////////////////////////////////////////////////////
// // SAFE NAVIGATION OPERATOR
// interface Child {
//   name: string;
//   age: number;
// }

// interface Passenger {
//   id: number;
//   fullname: string;
//   checkedIn: boolean;
//   checkedInDate: number | null;
//   children: Child[] | null;
// }

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.scss'],
//   template: `
//     <div class="app">
//       <h3>Airline Passengers</h3>
//       <ul>
//         <li *ngFor="let passenger of passengers; let i = index;">
//           <span class="status"
//           [class.checked-in]="passenger.checkedIn"></span>
//           {{ i }}: {{ passenger.fullname }}
//           <p>{{ passenger | json }}</p>
//           <div class="date">
//             Check in date: 
//             {{ passenger.checkedIn ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase ) : 'N/A' }}
//           </div>
//           <div class="children">
//             Children: {{ passenger.children?.length || 0 }}
//           </div>
//         </li>
//       </ul>
//     </div>
//   `
// })
// export class AppComponent {
//   passengers: Passenger[] = [{
//     id: 1,
//     fullname: 'Stephen',
//     checkedIn: true,
//     checkedInDate: 1490742000000,
//     children: null
//   }, {
//     id: 2,
//     fullname: 'Rose',
//     checkedIn: false,
//     checkedInDate: null,
//     children: [{
//       name: 'Charles',
//       age: 10
//     }]
//   },{
//     id: 3,
//     fullname: 'James',
//     checkedIn: true,
//     checkedInDate: 1490742000000,
//     children: null
//   }]
// }