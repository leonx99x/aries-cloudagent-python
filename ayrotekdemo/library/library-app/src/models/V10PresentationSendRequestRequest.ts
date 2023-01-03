/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofRequest } from './IndyProofRequest';

export type V10PresentationSendRequestRequest = {
    /**
     * Verifier choice to auto-verify proof presentation
     */
    auto_verify?: boolean;
    comment?: string | null;
    /**
     * Connection identifier
     */
    connection_id: string;
    proof_request: IndyProofRequest;
    /**
     * Whether to trace event (default false)
     */
    trace?: boolean;
};
