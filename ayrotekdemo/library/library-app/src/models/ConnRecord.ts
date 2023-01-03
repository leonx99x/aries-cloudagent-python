/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConnRecord = {
    /**
     * Connection acceptance: manual or auto
     */
    accept?: ConnRecord.accept;
    /**
     * Optional alias to apply to connection for later use
     */
    alias?: string;
    /**
     * Connection identifier
     */
    connection_id?: string;
    /**
     * Connection protocol used
     */
    connection_protocol?: ConnRecord.connection_protocol;
    /**
     * Time of record creation
     */
    created_at?: string;
    /**
     * Error message
     */
    error_msg?: string;
    /**
     * Inbound routing connection id to use
     */
    inbound_connection_id?: string;
    /**
     * Public key for connection
     */
    invitation_key?: string;
    /**
     * Invitation mode
     */
    invitation_mode?: ConnRecord.invitation_mode;
    /**
     * ID of out-of-band invitation message
     */
    invitation_msg_id?: string;
    /**
     * Our DID for connection
     */
    my_did?: string;
    /**
     * Connection request identifier
     */
    request_id?: string;
    /**
     * State per RFC 23
     */
    readonly rfc23_state?: string;
    /**
     * Routing state of connection
     */
    routing_state?: ConnRecord.routing_state;
    /**
     * Current record state
     */
    state?: string;
    /**
     * Their DID for connection
     */
    their_did?: string;
    /**
     * Their label for connection
     */
    their_label?: string;
    /**
     * Other agent's public DID for connection
     */
    their_public_did?: string;
    /**
     * Their role in the connection protocol
     */
    their_role?: ConnRecord.their_role;
    /**
     * Time of last record update
     */
    updated_at?: string;
};

export namespace ConnRecord {

    /**
     * Connection acceptance: manual or auto
     */
    export enum accept {
        MANUAL = 'manual',
        AUTO = 'auto',
    }

    /**
     * Connection protocol used
     */
    export enum connection_protocol {
        CONNECTIONS_1_0 = 'connections/1.0',
        DIDEXCHANGE_1_0 = 'didexchange/1.0',
    }

    /**
     * Invitation mode
     */
    export enum invitation_mode {
        ONCE = 'once',
        MULTI = 'multi',
        STATIC = 'static',
    }

    /**
     * Routing state of connection
     */
    export enum routing_state {
        NONE = 'none',
        REQUEST = 'request',
        ACTIVE = 'active',
        ERROR = 'error',
    }

    /**
     * Their role in the connection protocol
     */
    export enum their_role {
        INVITEE = 'invitee',
        REQUESTER = 'requester',
        INVITER = 'inviter',
        RESPONDER = 'responder',
    }


}
