/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Query = {
    /**
     * Message identifier
     */
    '@id'?: string;
    /**
     * Message type
     */
    readonly '@type'?: string;
    comment?: string | null;
    query: string;
};
