import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
    selector: 'passenger-detail',
    template: `
    <div>
        Detail Component
    </div>
    `
})
export class PassengerDetailComponent {
    constructor() { }
}