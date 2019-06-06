import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MeteorObservable, MongoObservable } from 'meteor-rxjs';

import { ClientValidation } from '../../both/models/validation.model';

const clientValidations: MongoObservable.Collection<ClientValidation> = new MongoObservable.Collection<ClientValidation>('clientValidations');

@Component({
    selector: 'validations-list',
    templateUrl: './validations-list.component.html'
})
export class ValidationsListComponent implements OnInit, OnDestroy {
    @Input()
    find: {};
    @Input()
    status: number;
    @Output()
    totalValidations: EventEmitter<number> = new EventEmitter<number>();
    @Output()
    modalConfirmation: EventEmitter<any> = new EventEmitter<any>();

    public readyList: boolean = false;
    public totalValidationsPager: number;

    /* Table */
    public validations: Observable<ClientValidation[]>;
    private _validationsSub: Subscription;
    private _countSub: Subscription;

    // Order
    public sortOrder: number = 1;
    public sortField: string = 'valId';
    /* Table */

    constructor() { }

    ngOnInit(): void {
        this.loadPageTable();
    }

    ngOnDestroy(): void {
        if (this._validationsSub)
            this._validationsSub.unsubscribe();
        if (this._countSub)
            this._countSub.unsubscribe();
    }

    loadPageTable(): void {
        this.readyList = false;

        if (this._countSub)
            this._countSub.unsubscribe();
        this._countSub = MeteorObservable.call('countValidations', this.find).subscribe((totalValidations: number) => {
            if (totalValidations !== 0) {
                this.emitTotalValidations(totalValidations);
                this.totalValidationsPager = totalValidations;
                this.searchValidation();
            } else {
                this.validations = null;
                this.readyList = true;
            }
        });
    }

    private searchValidation(): void {
        if (this._validationsSub)
            this._validationsSub.unsubscribe();
        this._validationsSub = MeteorObservable.subscribe('validationsByCustomFind', this.find, this.sortField,
            this.sortOrder).subscribe(() => {
                this.validations = clientValidations.find(this.find);
                this.readyList = true;
            });
    }

    private emitTotalValidations(total: number): void {
        if (this.totalValidations)
            this.totalValidations.emit(total);
    }

    sort(field: string): void {
        this.sortOrder = (this.sortField === field) ? this.sortOrder * -1 : 1;
        this.sortField = field;
        this.loadPageTable();
    }
}
