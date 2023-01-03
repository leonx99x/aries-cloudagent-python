/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyGEProofPred = {
    /**
     * Attribute name, indy-canonicalized
     */
    attr_name?: string;
    /**
     * Predicate type
     */
    p_type?: IndyGEProofPred.p_type;
    /**
     * Predicate threshold value
     */
    value?: number;
};

export namespace IndyGEProofPred {

    /**
     * Predicate type
     */
    export enum p_type {
        LT = 'LT',
        LE = 'LE',
        GE = 'GE',
        GT = 'GT',
    }


}
