/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyNonRevocProof } from './IndyNonRevocProof';
import type { IndyPrimaryProof } from './IndyPrimaryProof';

export type IndyProofProofProofsProof = {
    /**
     * Indy non-revocation proof
     */
    non_revoc_proof?: IndyNonRevocProof | null;
    /**
     * Indy primary proof
     */
    primary_proof?: IndyPrimaryProof;
};
