/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Filter } from './Filter';

export type DIFField = {
    filter?: Filter;
    /**
     * ID
     */
    id?: string;
    path?: Array<string>;
    /**
     * Preference
     */
    predicate?: DIFField.predicate;
    /**
     * Purpose
     */
    purpose?: string;
};

export namespace DIFField {

    /**
     * Preference
     */
    export enum predicate {
        REQUIRED = 'required',
        PREFERRED = 'preferred',
    }


}
