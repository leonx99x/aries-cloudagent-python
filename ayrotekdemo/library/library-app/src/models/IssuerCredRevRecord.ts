/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IssuerCredRevRecord = {
    /**
     * Time of record creation
     */
    created_at?: string;
    /**
     * Credential definition identifier
     */
    cred_def_id?: string;
    /**
     * Credential exchange record identifier at credential issue
     */
    cred_ex_id?: string;
    /**
     * Credential revocation identifier
     */
    cred_rev_id?: string;
    /**
     * Issuer credential revocation record identifier
     */
    record_id?: string;
    /**
     * Revocation registry identifier
     */
    rev_reg_id?: string;
    /**
     * Issue credential revocation record state
     */
    state?: string;
    /**
     * Time of last record update
     */
    updated_at?: string;
};
