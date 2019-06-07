import { Meteor } from 'meteor/meteor';

import { Validation } from '../both/models/validation.model';
import { Validations } from '../both/collections/validations.collection';

Meteor.methods({
    addValidations(validations: Array<Validation>) {
        const oldValidations = Validations.find().fetch();
        for (const validation of oldValidations)
            Validations.remove(validation);

        for (const validation of validations)
            Validations.insert(validation);
    },
    countValidations: function (find: object) {
        return Validations.collection.find(find).count();
    }
});
