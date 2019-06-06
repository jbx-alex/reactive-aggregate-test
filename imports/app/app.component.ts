import { Component, ViewEncapsulation } from '@angular/core';

import { Meteor } from 'meteor/meteor';
import { Validation } from "../both/models/validation.model";

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public validations: Array<Validation> = [
        {
            valId: 1,
            valStatus: 6,
            valleaLead:  [
                {
                    leaId: 7803560
                },
                {
                    leaId: 7803712
                },
                {
                    leaId: 7805672
                },
                {
                    leaId: 7806182
                }
            ]
        },
        {
            valId: 2,
            valStatus: 6,
            valleaLead : [
                {
                    leaId: 8076220
                },
                {
                    leaId: 8089697
                }
            ]
        },
        {
            valId: 3,
            valStatus: 6,
            valleaLead: []
        },
        {
            valId: 4,
            valStatus: 4,
            valleaLead:  [
                {
                    leaId: 8121676
                },
                {
                    leaId: 8128959
                },
                {
                    leaId: 8130089
                }
            ]
        },
        {
            valId: 5,
            valStatus: 4,
            valleaLead : [
                {
                    leaId: 8068353
                },
                {
                    leaId: 8088965
                },
                {
                    leaId: 8089905
                },
                {
                    leaId: 8105826
                }
            ]
        },
        {
            valId: 6,
            valStatus: 4,
            valleaLead: []
        },
        {
            valId: 7,
            valStatus: 6,
            valleaLead: [
                {
                    leaId: 8092541
                },
                {
                    leaId: 8093329
                },
                {
                    leaId: 8094257
                },
                {
                    leaId: 8094723
                },
                {
                    leaId: 8095329
                },
                {
                    leaId: 8096739
                },
                {
                    leaId: 8099697
                },
                {
                    leaId: 8100817
                },
                {
                    leaId: 8102275
                },
            ]
        },
        {
            valId: 8,
            valStatus: 6,
            valleaLead: [
                {
                    leaId: 8072284
                }
            ]
        },
    ];

    constructor() {
        Meteor.call('addValidations', this.validations);
    }
}
