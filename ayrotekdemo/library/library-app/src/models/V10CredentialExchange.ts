/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CredentialOffer } from './CredentialOffer';
import type { CredentialProposal } from './CredentialProposal';
import type { IndyCredAbstract } from './IndyCredAbstract';
import type { IndyCredential } from './IndyCredential';
import type { IndyCredInfo } from './IndyCredInfo';
import type { IndyCredRequest } from './IndyCredRequest';

export type V10CredentialExchange = {
    /**
     * Issuer choice to issue to request in this credential exchange
     */
    auto_issue?: boolean;
    /**
     * Holder choice to accept offer in this credential exchange
     */
    auto_offer?: boolean;
    /**
     * Issuer choice to remove this credential exchange record when complete
     */
    auto_remove?: boolean;
    /**
     * Connection identifier
     */
    connection_id?: string;
    /**
     * Time of record creation
     */
    created_at?: string;
    /**
     * Credential as stored
     */
    credential?: IndyCredInfo;
    /**
     * Credential definition identifier
     */
    credential_definition_id?: string;
    /**
     * Credential exchange identifier
     */
    credential_exchange_id?: string;
    /**
     * Credential identifier
     */
    credential_id?: string;
    /**
     * (Indy) credential offer
     */
    credential_offer?: IndyCredAbstract;
    /**
     * Credential offer message
     */
    credential_offer_dict?: CredentialOffer;
    /**
     * Credential proposal message
     */
    credential_proposal_dict?: CredentialProposal;
    /**
     * (Indy) credential request
     */
    credential_request?: IndyCredRequest;
    /**
     * (Indy) credential request metadata
     */
    credential_request_metadata?: any;
    /**
     * Error message
     */
    error_msg?: string;
    /**
     * Issue-credential exchange initiator: self or external
     */
    initiator?: V10CredentialExchange.initiator;
    /**
     * Parent thread identifier
     */
    parent_thread_id?: string;
    /**
     * Credential as received, prior to storage in holder wallet
     */
    raw_credential?: IndyCredential;
    /**
     * Revocation registry identifier
     */
    revoc_reg_id?: string;
    /**
     * Credential identifier within revocation registry
     */
    revocation_id?: string;
    /**
     * Issue-credential exchange role: holder or issuer
     */
    role?: V10CredentialExchange.role;
    /**
     * Schema identifier
     */
    schema_id?: string;
    /**
     * Issue-credential exchange state
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
};

export namespace V10CredentialExchange {

    /**
     * Issue-credential exchange initiator: self or external
     */
    export enum initiator {
        SELF = 'self',
        EXTERNAL = 'external',
    }

    /**
     * Issue-credential exchange role: holder or issuer
     */
    export enum role {
        HOLDER = 'holder',
        ISSUER = 'issuer',
    }


}
