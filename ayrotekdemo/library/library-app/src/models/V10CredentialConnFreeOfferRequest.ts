/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CredentialPreview } from './CredentialPreview';

export type V10CredentialConnFreeOfferRequest = {
    /**
     * Whether to respond automatically to credential requests, creating and issuing requested credentials
     */
    auto_issue?: boolean;
    /**
     * Whether to remove the credential exchange record on completion (overrides --preserve-exchange-records configuration setting)
     */
    auto_remove?: boolean;
    /**
     * Human-readable comment
     */
    comment?: string | null;
    /**
     * Credential definition identifier
     */
    cred_def_id: string;
    credential_preview: CredentialPreview;
    /**
     * Record trace information, based on agent configuration
     */
    trace?: boolean;
};
