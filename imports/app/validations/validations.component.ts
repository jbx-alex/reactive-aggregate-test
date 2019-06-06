import { Component, OnInit } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';

import { Validation } from '../../both/models/validation.model';

@Component({
    selector: 'validations',
    templateUrl: './validations.component.html'
})
export class ValidationsComponent implements OnInit {
    public STATUS_VALIDATION_PENDING_INVOICE: number = 4;
    public STATUS_VALIDATION_INVOICED: number = 6;

    public activeIdString: string;

    public pendingInvoiceTotal: number = 0;
    public pendingInvoice: { [s: string]: number } = { 'valStatus': this.STATUS_VALIDATION_PENDING_INVOICE };

    public invoiceIncidenceTotal: number = 0;
    public invoiceIncidence: { [s: string]: number } = { 'valStatus': this.STATUS_VALIDATION_INVOICED };

    constructor() { }

    ngOnInit(): void {
        const tabsTitle: Array<any> = [
            [this.pendingInvoice, this.STATUS_VALIDATION_PENDING_INVOICE],
            [this.invoiceIncidence, this.STATUS_VALIDATION_INVOICED]
        ];

        for (const tab of tabsTitle)
            MeteorObservable.call('countValidations', tab[0]).subscribe((totalValidations: number) => {
                switch (tab[1]) {
                    case this.STATUS_VALIDATION_PENDING_INVOICE: {
                        this.totalPendingInvoice(totalValidations);
                        break;
                    }
                    case this.STATUS_VALIDATION_INVOICED: {
                        this.totalInvoiceIncidence(totalValidations);
                        break;
                    }
                }
            });
    }

    totalPendingInvoice(total: number): void {
        this.pendingInvoiceTotal = total;
    }

    totalInvoiceIncidence(total: number): void {
        this.invoiceIncidenceTotal = total;
    }
}
