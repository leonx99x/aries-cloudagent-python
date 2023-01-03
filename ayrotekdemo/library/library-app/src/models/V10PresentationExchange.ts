/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProof } from './IndyProof';
import type { IndyProofRequest } from './IndyProofRequest';
import type { PresentationProposal } from './PresentationProposal';
import type { PresentationRequest } from './PresentationRequest';

export type V10PresentationExchange = {
    /**
     * Prover choice to auto-present proof as verifier requests
     */
    auto_present?: boolean;
    /**
     * Verifier choice to auto-verify proof presentation
     */
    auto_verify?: boolean;
    /**
     * Connection identifier
     */
    connection_id?: string;
    /**
     * Time of record creation
     */
    created_at?: string;
    /**
     * Error message
     */
    error_msg?: string;
    /**
     * Present-proof exchange initiator: self or external
     */
    initiator?: V10PresentationExchange.initiator;
    /**
     * (Indy) presentation (also known as proof)
     */
    presentation?: IndyProof;
    /**
     * Presentation exchange identifier
     */
    presentation_exchange_id?: string;
    /**
     * Presentation proposal message
     */
    presentation_proposal_dict?: PresentationProposal;
    /**
     * (Indy) presentation request (also known as proof request)
     */
    presentation_request?: IndyProofRequest;
    /**
     * Presentation request message
     */
    presentation_request_dict?: PresentationRequest;
    /**
     * Present-proof exchange role: prover or verifier
     */
    role?: V10PresentationExchange.role;
    /**
     * Present-proof exchange state
     */
    state?: string;
    /**
     * Thread identifier
     */
    thread_id?: string;
    /**
     * Record trace information, based on agent configuration
     */
    trace?: boolean;
    /**
     * Time of last record update
     */
    updated_at?: string;
    /**
     * Whether presentation is verified: true or false
     */
    verified?: V10PresentationExchange.verified;
    verified_msgs?: Array<string>;
};

export namespace V10PresentationExchange {

    /**
     * Present-proof exchange initiator: self or external
     */
    export enum initiator {
        SELF = 'self',
        EXTERNAL = 'external',
    }

    /**
     * Present-proof exchange role: prover or verifier
     */
    export enum role {
        PROVER = 'prover',
        VERIFIER = 'verifier',
    }

    /**
     * Whether presentation is verified: true or false
     */
    export enum verified {
        TRUE = 'true',
        FALSE = 'false',
    }


}
