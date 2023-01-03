/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentDef } from './AttachmentDef';

export type InvitationCreateRequest = {
    /**
     * List of mime type in order of preference that should be use in responding to the message
     */
    accept?: Array<string>;
    /**
     * Alias for connection
     */
    alias?: string;
    /**
     * Optional invitation attachments
     */
    attachments?: Array<AttachmentDef>;
    handshake_protocols?: Array<string>;
    /**
     * Identifier for active mediation record to be used
     */
    mediation_id?: string;
    /**
     * Optional metadata to attach to the connection created with the invitation
     */
    metadata?: any;
    /**
     * Label for connection invitation
     */
    my_label?: string;
    /**
     * OOB protocol version
     */
    protocol_version?: string;
    /**
     * Whether to use public DID in invitation
     */
    use_public_did?: boolean;
};
