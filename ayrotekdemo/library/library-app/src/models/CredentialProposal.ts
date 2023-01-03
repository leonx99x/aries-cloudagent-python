/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CredentialPreview } from './CredentialPreview';

export type CredentialProposal = {
    /**
     * Message identifier
     */
    '@id'?: string;
    /**
     * Message type
     */
    readonly '@type'?: string;
    /**
     * Human-readable comment
     */
    comment?: string | null;
    cred_def_id?: string;
    credential_proposal?: CredentialPreview;
    issuer_did?: string;
    schema_id?: string;
    schema_issuer_did?: string;
    schema_name?: string;
    schema_version?: string;
};
