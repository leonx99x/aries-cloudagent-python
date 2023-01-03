/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CredDefValue } from './CredDefValue';

export type CredentialDefinition = {
    /**
     * Credential definition identifier
     */
    id?: string;
    /**
     * Schema identifier within credential definition identifier
     */
    schemaId?: string;
    /**
     * Tag within credential definition identifier
     */
    tag?: string;
    /**
     * Signature type: CL for Camenisch-Lysyanskaya
     */
    type?: any;
    /**
     * Credential definition primary and revocation values
     */
    value?: CredDefValue;
    /**
     * Node protocol version
     */
    ver?: string;
};
