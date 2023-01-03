/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkedDataProof } from './LinkedDataProof';

export type Credential = {
    /**
     * The JSON-LD context of the credential
     */
    '@context': Array<any>;
    credentialSubject: any;
    /**
     * The expiration date
     */
    expirationDate?: string;
    id?: string;
    /**
     * The issuance date
     */
    issuanceDate: string;
    /**
     * The JSON-LD Verifiable Credential Issuer. Either string of object with id field.
     */
    issuer: any;
    /**
     * The proof of the credential
     */
    proof?: LinkedDataProof;
    /**
     * The JSON-LD type of the credential
     */
    type: Array<string>;
};
