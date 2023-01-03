/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationMessage } from './InvitationMessage';

export type InvitationRecord = {
    /**
     * Time of record creation
     */
    created_at?: string;
    /**
     * Invitation message identifier
     */
    invi_msg_id?: string;
    /**
     * Out of band invitation message
     */
    invitation?: InvitationMessage;
    /**
     * Invitation record identifier
     */
    invitation_id?: string;
    /**
     * Invitation message URL
     */
    invitation_url?: string;
    /**
     * Out of band record identifier
     */
    oob_id?: string;
    /**
     * Out of band message exchange state
     */
    state?: string;
    /**
     * Record trace information, based on agent configuration
     */
    trace?: boolean;
    /**
     * Time of last record update
     */
    updated_at?: string;
};
