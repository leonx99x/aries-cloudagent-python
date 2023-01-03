/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyGEProofPred } from './IndyGEProofPred';

export type IndyGEProof = {
    alpha?: string;
    mj?: string;
    predicate?: IndyGEProofPred;
    'r'?: Record<string, string>;
    't'?: Record<string, string>;
    'u'?: Record<string, string>;
};
