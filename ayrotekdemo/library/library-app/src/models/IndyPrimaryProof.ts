/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyEQProof } from './IndyEQProof';
import type { IndyGEProof } from './IndyGEProof';

export type IndyPrimaryProof = {
    /**
     * Indy equality proof
     */
    eq_proof?: IndyEQProof | null;
    /**
     * Indy GE proofs
     */
    ge_proofs?: Array<IndyGEProof> | null;
};
