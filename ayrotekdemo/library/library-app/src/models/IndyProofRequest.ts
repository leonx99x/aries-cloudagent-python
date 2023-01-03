/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofReqAttrSpec } from './IndyProofReqAttrSpec';
import type { IndyProofReqPredSpec } from './IndyProofReqPredSpec';
import type { IndyProofRequestNonRevoked } from './IndyProofRequestNonRevoked';

export type IndyProofRequest = {
    /**
     * Proof request name
     */
    name?: string;
    non_revoked?: IndyProofRequestNonRevoked | null;
    /**
     * Nonce
     */
    nonce?: string;
    /**
     * Requested attribute specifications of proof request
     */
    requested_attributes: Record<string, IndyProofReqAttrSpec>;
    /**
     * Requested predicate specifications of proof request
     */
    requested_predicates: Record<string, IndyProofReqPredSpec>;
    /**
     * Proof request version
     */
    version?: string;
};
