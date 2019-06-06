export class Validation {
    valId: number;
    valStatus: number;
    valleaLead: Array<Lead>;
}

export class Lead {
    leaId: number;
}

export class ClientValidation extends Validation {
    valTotalLeads: number;
}
