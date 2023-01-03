/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyKeyCorrectnessProof = {
    /**
     * c in key correctness proof
     */
    'c': string;
    /**
     * xr_cap in key correctness proof
     */
    xr_cap: Array<Array<string>>;
    /**
     * xz_cap in key correctness proof
     */
    xz_cap: string;
};
