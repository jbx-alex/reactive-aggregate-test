import { MongoObservable } from 'meteor-rxjs';

import { Validation } from '../models/validation.model';

export const Validations = new MongoObservable.Collection<Validation>('validations');
