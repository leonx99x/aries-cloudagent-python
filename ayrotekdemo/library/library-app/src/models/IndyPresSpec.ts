/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyRequestedCredsRequestedAttr } from './IndyRequestedCredsRequestedAttr';
import type { IndyRequestedCredsRequestedPred } from './IndyRequestedCredsRequestedPred';

export type IndyPresSpec = {
    /**
     * Nested object mapping proof request attribute referents to requested-attribute specifiers
     */
    requested_attributes: Record<string, IndyRequestedCredsRequestedAttr>;
    /**
     * Nested object mapping proof request predicate referents to requested-predicate specifiers
     */
    requested_predicates: Record<string, IndyRequestedCredsRequestedPred>;
    /**
     * Self-attested attributes to build into proof
     */
    self_attested_attributes: Record<string, string>;
    /**
     * Whether to trace event (default false)
     */
    trace?: boolean;
};
