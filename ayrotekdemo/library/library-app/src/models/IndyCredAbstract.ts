/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyKeyCorrectnessProof } from './IndyKeyCorrectnessProof';

export type IndyCredAbstract = {
    /**
     * Credential definition identifier
     */
    cred_def_id: string;
    /**
     * Key correctness proof
     */
    key_correctness_proof: IndyKeyCorrectnessProof;
    /**
     * Nonce in credential abstract
     */
    nonce: string;
    /**
     * Schema identifier
     */
    schema_id: string;
};
