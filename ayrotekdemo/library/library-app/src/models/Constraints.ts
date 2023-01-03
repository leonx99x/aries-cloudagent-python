/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DIFField } from './DIFField';
import type { DIFHolder } from './DIFHolder';

export type Constraints = {
    fields?: Array<DIFField>;
    is_holder?: Array<DIFHolder>;
    /**
     * LimitDisclosure
     */
    limit_disclosure?: string;
    status_active?: Constraints.status_active;
    status_revoked?: Constraints.status_revoked;
    status_suspended?: Constraints.status_suspended;
    /**
     * SubjectIsIssuer
     */
    subject_is_issuer?: Constraints.subject_is_issuer;
};

export namespace Constraints {

    export enum status_active {
        REQUIRED = 'required',
        ALLOWED = 'allowed',
        DISALLOWED = 'disallowed',
    }

    export enum status_revoked {
        REQUIRED = 'required',
        ALLOWED = 'allowed',
        DISALLOWED = 'disallowed',
    }

    export enum status_suspended {
        REQUIRED = 'required',
        ALLOWED = 'allowed',
        DISALLOWED = 'disallowed',
    }

    /**
     * SubjectIsIssuer
     */
    export enum subject_is_issuer {
        REQUIRED = 'required',
        PREFERRED = 'preferred',
    }


}
