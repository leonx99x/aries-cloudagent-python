/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReceiveInvitationRequest = {
    /**
     * Message identifier
     */
    '@id'?: string;
    /**
     * Message type
     */
    readonly '@type'?: string;
    /**
     * DID for connection invitation
     */
    did?: string;
    /**
     * Optional image URL for connection invitation
     */
    imageUrl?: string | null;
    /**
     * Optional label for connection invitation
     */
    label?: string;
    /**
     * List of recipient keys
     */
    recipientKeys?: Array<string>;
    /**
     * List of routing keys
     */
    routingKeys?: Array<string>;
    /**
     * Service endpoint at which to reach this agent
     */
    serviceEndpoint?: string;
};
