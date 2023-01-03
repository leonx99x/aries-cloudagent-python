/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CredentialDefinitionSendRequest = {
    /**
     * Revocation registry size
     */
    revocation_registry_size?: number;
    /**
     * Schema identifier
     */
    schema_id?: string;
    /**
     * Revocation supported flag
     */
    support_revocation?: boolean;
    /**
     * Credential definition identifier tag
     */
    tag?: string;
};
