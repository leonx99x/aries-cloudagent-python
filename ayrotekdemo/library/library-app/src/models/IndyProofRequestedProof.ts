/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofRequestedProofPredicate } from './IndyProofRequestedProofPredicate';
import type { IndyProofRequestedProofRevealedAttr } from './IndyProofRequestedProofRevealedAttr';
import type { IndyProofRequestedProofRevealedAttrGroup } from './IndyProofRequestedProofRevealedAttrGroup';

export type IndyProofRequestedProof = {
    /**
     * Proof requested proof predicates.
     */
    predicates?: Record<string, IndyProofRequestedProofPredicate>;
    /**
     * Proof requested proof revealed attribute groups
     */
    revealed_attr_groups?: Record<string, IndyProofRequestedProofRevealedAttrGroup> | null;
    /**
     * Proof requested proof revealed attributes
     */
    revealed_attrs?: Record<string, IndyProofRequestedProofRevealedAttr> | null;
    /**
     * Proof requested proof self-attested attributes
     */
    self_attested_attrs?: any;
    /**
     * Unrevealed attributes
     */
    unrevealed_attrs?: any;
};
