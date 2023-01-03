/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyPresAttrSpec = {
    cred_def_id?: string;
    /**
     * MIME type (default null)
     */
    'mime-type'?: string;
    /**
     * Attribute name
     */
    name: string;
    /**
     * Credential referent
     */
    referent?: string;
    /**
     * Attribute value
     */
    value?: string;
};
