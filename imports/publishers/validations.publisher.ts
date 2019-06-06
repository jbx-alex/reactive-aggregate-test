import { Meteor } from 'meteor/meteor';

import { ReactiveAggregate } from 'meteor/tunguska:reactive-aggregate';

import { Validations } from '../both/collections/validations.collection';

Meteor.publish('validationsByCustomFind', function (find: object, sortField: string, sortOrder: number) {
    const sort: any = {};
    if (sortField)
        sort[sortField] = sortOrder;

    ReactiveAggregate(this, Validations, [
        { $match: find },
        { $addFields: {
            valTotalLeads: { '$size': '$valleaLead.leaId' }
        }},
        { $sort: sort },
    ], { clientCollection: 'clientValidations' }, { allowDiskUse: true });
});
