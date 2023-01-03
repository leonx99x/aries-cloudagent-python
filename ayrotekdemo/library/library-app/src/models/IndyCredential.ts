/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyAttrValue } from './IndyAttrValue';

export type IndyCredential = {
    /**
     * Credential definition identifier
     */
    cred_def_id: string;
    /**
     * Revocation registry state
     */
    rev_reg?: any;
    /**
     * Revocation registry identifier
     */
    rev_reg_id?: string | null;
    /**
     * Schema identifier
     */
    schema_id: string;
    /**
     * Credential signature
     */
    signature: any;
    /**
     * Credential signature correctness proof
     */
    signature_correctness_proof: any;
    /**
     * Credential attributes
     */
    values: Record<string, IndyAttrValue>;
    /**
     * Witness for revocation proof
     */
    witness?: any;
};
