/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyCredInfo = {
    /**
     * Attribute names and value
     */
    attrs?: Record<string, string>;
    /**
     * Credential definition identifier
     */
    cred_def_id?: string;
    /**
     * Credential revocation identifier
     */
    cred_rev_id?: string | null;
    /**
     * Wallet referent
     */
    referent?: string;
    /**
     * Revocation registry identifier
     */
    rev_reg_id?: string | null;
    /**
     * Schema identifier
     */
    schema_id?: string;
};
