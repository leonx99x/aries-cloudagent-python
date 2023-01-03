/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RawEncoded } from './RawEncoded';

export type IndyProofRequestedProofRevealedAttrGroup = {
    /**
     * Sub-proof index
     */
    sub_proof_index?: number;
    /**
     * Indy proof requested proof revealed attr groups group value
     */
    values?: Record<string, RawEncoded>;
};
