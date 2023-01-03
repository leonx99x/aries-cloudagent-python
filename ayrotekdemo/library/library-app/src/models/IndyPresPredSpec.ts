/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyPresPredSpec = {
    /**
     * Credential definition identifier
     */
    cred_def_id?: string;
    /**
     * Attribute name
     */
    name: string;
    /**
     * Predicate type ('<', '<=', '>=', or '>')
     */
    predicate: IndyPresPredSpec.predicate;
    /**
     * Threshold value
     */
    threshold: number;
};

export namespace IndyPresPredSpec {

    /**
     * Predicate type ('<', '<=', '>=', or '>')
     */
    export enum predicate {
        SMALLER = '<',
        SMALLEROREQUAL = '<=',
        BIGGEROREQUAL = '>=',
        BIGGER = '>',
    }


}
