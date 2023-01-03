/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyCredRequest = {
    /**
     * Blinded master secret
     */
    blinded_ms: any;
    /**
     * Blinded master secret correctness proof
     */
    blinded_ms_correctness_proof: any;
    /**
     * Credential definition identifier
     */
    cred_def_id: string;
    /**
     * Nonce in credential request
     */
    nonce: string;
    /**
     * Prover DID
     */
    prover_did?: string;
};
