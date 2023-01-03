/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateInvitationRequest = {
    /**
     * Identifier for active mediation record to be used
     */
    mediation_id?: string;
    /**
     * Optional metadata to attach to the connection created with the invitation
     */
    metadata?: any;
    /**
     * Optional label for connection invitation
     */
    my_label?: string;
    /**
     * List of recipient keys
     */
    recipient_keys?: Array<string>;
    /**
     * List of routing keys
     */
    routing_keys?: Array<string>;
    /**
     * Connection endpoint
     */
    service_endpoint?: string;
};
