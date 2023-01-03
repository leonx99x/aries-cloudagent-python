/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyProofIdentifier = {
    /**
     * Credential definition identifier
     */
    cred_def_id?: string;
    /**
     * Revocation registry identifier
     */
    rev_reg_id?: string | null;
    /**
     * Schema identifier
     */
    schema_id?: string;
    /**
     * Timestamp epoch
     */
    timestamp?: number | null;
};
