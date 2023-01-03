/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofRequest } from './IndyProofRequest';

export type V10PresentationCreateRequestRequest = {
    /**
     * Verifier choice to auto-verify proof presentation
     */
    auto_verify?: boolean;
    comment?: string | null;
    proof_request: IndyProofRequest;
    /**
     * Whether to trace event (default false)
     */
    trace?: boolean;
};
