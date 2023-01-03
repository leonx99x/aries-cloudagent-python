/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CredentialPreview } from './CredentialPreview';

export type V10CredentialCreate = {
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
    cred_def_id?: string;
    credential_proposal: CredentialPreview;
    /**
     * Credential issuer DID
     */
    issuer_did?: string;
    /**
     * Schema identifier
     */
    schema_id?: string;
    /**
     * Schema issuer DID
     */
    schema_issuer_did?: string;
    /**
     * Schema name
     */
    schema_name?: string;
    /**
     * Schema version
     */
    schema_version?: string;
    /**
     * Record trace information, based on agent configuration
     */
    trace?: boolean;
};
