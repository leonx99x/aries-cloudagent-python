/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkedDataProof = {
    /**
     * Associates a challenge with a proof, for use with a proofPurpose such as authentication
     */
    challenge?: string;
    /**
     * The string value of an ISO8601 combined date and time string generated by the Signature Algorithm
     */
    created: string;
    /**
     * A string value specifying the restricted domain of the signature.
     */
    domain?: string;
    /**
     * Associates a Detached Json Web Signature with a proof
     */
    jws?: string;
    /**
     * The nonce
     */
    nonce?: string;
    /**
     * Proof purpose
     */
    proofPurpose: string;
    /**
     * The proof value of a proof
     */
    proofValue?: string;
    /**
     * Identifies the digital signature suite that was used to create the signature
     */
    type: string;
    /**
     * Information used for proof verification
     */
    verificationMethod: string;
};
