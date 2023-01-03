/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubmissionRequirements = {
    /**
     * Count Value
     */
    count?: number;
    /**
     * From
     */
    from?: string;
    from_nested?: Array<SubmissionRequirements>;
    /**
     * Max Value
     */
    max?: number;
    /**
     * Min Value
     */
    min?: number;
    /**
     * Name
     */
    name?: string;
    /**
     * Purpose
     */
    purpose?: string;
    /**
     * Selection
     */
    rule?: SubmissionRequirements.rule;
};

export namespace SubmissionRequirements {

    /**
     * Selection
     */
    export enum rule {
        ALL = 'all',
        PICK = 'pick',
    }


}
