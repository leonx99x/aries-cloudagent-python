/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofProofAggregatedProof } from './IndyProofProofAggregatedProof';
import type { IndyProofProofProofsProof } from './IndyProofProofProofsProof';

export type IndyProofProof = {
    /**
     * Indy proof aggregated proof
     */
    aggregated_proof?: IndyProofProofAggregatedProof;
    /**
     * Indy proof proofs
     */
    proofs?: Array<IndyProofProofProofsProof>;
};
