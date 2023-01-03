/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofIdentifier } from './IndyProofIdentifier';
import type { IndyProofProof } from './IndyProofProof';
import type { IndyProofRequestedProof } from './IndyProofRequestedProof';

export type IndyProof = {
    /**
     * Indy proof.identifiers content
     */
    identifiers?: Array<IndyProofIdentifier>;
    /**
     * Indy proof.proof content
     */
    proof?: IndyProofProof;
    /**
     * Indy proof.requested_proof content
     */
    requested_proof?: IndyProofRequestedProof;
};
