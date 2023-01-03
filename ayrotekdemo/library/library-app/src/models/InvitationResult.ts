/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionInvitation } from './ConnectionInvitation';

export type InvitationResult = {
    /**
     * Connection identifier
     */
    connection_id?: string;
    invitation?: ConnectionInvitation;
    /**
     * Invitation URL
     */
    invitation_url?: string;
};
