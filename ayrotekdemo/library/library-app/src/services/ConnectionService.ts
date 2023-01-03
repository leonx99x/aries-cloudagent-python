/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionList } from '../models/ConnectionList';
import type { ConnectionMetadata } from '../models/ConnectionMetadata';
import type { ConnectionMetadataSetRequest } from '../models/ConnectionMetadataSetRequest';
import type { ConnectionModuleResponse } from '../models/ConnectionModuleResponse';
import type { ConnectionStaticRequest } from '../models/ConnectionStaticRequest';
import type { ConnectionStaticResult } from '../models/ConnectionStaticResult';
import type { ConnRecord } from '../models/ConnRecord';
import type { CreateInvitationRequest } from '../models/CreateInvitationRequest';
import type { EndpointsResult } from '../models/EndpointsResult';
import type { InvitationResult } from '../models/InvitationResult';
import type { ReceiveInvitationRequest } from '../models/ReceiveInvitationRequest';

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';

export class ConnectionService {

    /**
     * Query agent-to-agent connections
     * @param alias Alias
     * @param connectionProtocol Connection protocol used
     * @param invitationKey invitation key
     * @param invitationMsgId Identifier of the associated Invitation Mesage
     * @param myDid My DID
     * @param state Connection state
     * @param theirDid Their DID
     * @param theirPublicDid Their Public DID
     * @param theirRole Their role in the connection protocol
     * @returns ConnectionList 
     * @throws ApiError
     */
    public static getConnections(
alias?: string,
connectionProtocol?: 'connections/1.0' | 'didexchange/1.0',
invitationKey?: string,
invitationMsgId?: string,
myDid?: string,
state?: 'error' | 'invitation' | 'request' | 'completed' | 'init' | 'response' | 'active' | 'abandoned' | 'start',
theirDid?: string,
theirPublicDid?: string,
theirRole?: 'invitee' | 'requester' | 'inviter' | 'responder',
): CancelablePromise<ConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connections',
            query: {
                'alias': alias,
                'connection_protocol': connectionProtocol,
                'invitation_key': invitationKey,
                'invitation_msg_id': invitationMsgId,
                'my_did': myDid,
                'state': state,
                'their_did': theirDid,
                'their_public_did': theirPublicDid,
                'their_role': theirRole,
            },
        });
    }

    /**
     * Create a new connection invitation
     * @param body 
     * @param alias Alias
     * @param autoAccept Auto-accept connection (defaults to configuration)
     * @param multiUse Create invitation for multiple use (default false)
     * @param _public Create invitation from public DID (default false)
     * @returns InvitationResult 
     * @throws ApiError
     */
    public static postConnectionsCreateInvitation(
body?: CreateInvitationRequest,
alias?: string,
autoAccept?: boolean,
multiUse?: boolean,
_public?: boolean,
): CancelablePromise<InvitationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/create-invitation',
            query: {
                'alias': alias,
                'auto_accept': autoAccept,
                'multi_use': multiUse,
                'public': _public,
            },
            body: body,
        });
    }

    /**
     * Create a new static connection
     * @param body 
     * @returns ConnectionStaticResult 
     * @throws ApiError
     */
    public static postConnectionsCreateStatic(
body?: ConnectionStaticRequest,
): CancelablePromise<ConnectionStaticResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/create-static',
            body: body,
        });
    }

    /**
     * Receive a new connection invitation
     * @param body 
     * @param alias Alias
     * @param autoAccept Auto-accept connection (defaults to configuration)
     * @param mediationId Identifier for active mediation record to be used
     * @returns ConnRecord 
     * @throws ApiError
     */
    public static postConnectionsReceiveInvitation(
body?: ReceiveInvitationRequest,
alias?: string,
autoAccept?: boolean,
mediationId?: string,
): CancelablePromise<ConnRecord> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/receive-invitation',
            query: {
                'alias': alias,
                'auto_accept': autoAccept,
                'mediation_id': mediationId,
            },
            body: body,
        });
    }

    /**
     * Fetch a single connection record
     * @param connId Connection identifier
     * @returns ConnRecord 
     * @throws ApiError
     */
    public static getConnections1(
connId: string,
): CancelablePromise<ConnRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connections/{conn_id}',
            path: {
                'conn_id': connId,
            },
        });
    }

    /**
     * Remove an existing connection record
     * @param connId Connection identifier
     * @returns ConnectionModuleResponse 
     * @throws ApiError
     */
    public static deleteConnections(
connId: string,
): CancelablePromise<ConnectionModuleResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/connections/{conn_id}',
            path: {
                'conn_id': connId,
            },
        });
    }

    /**
     * Accept a stored connection invitation
     * @param connId Connection identifier
     * @param mediationId Identifier for active mediation record to be used
     * @param myEndpoint My URL endpoint
     * @param myLabel Label for connection
     * @returns ConnRecord 
     * @throws ApiError
     */
    public static postConnectionsAcceptInvitation(
connId: string,
mediationId?: string,
myEndpoint?: string,
myLabel?: string,
): CancelablePromise<ConnRecord> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/{conn_id}/accept-invitation',
            path: {
                'conn_id': connId,
            },
            query: {
                'mediation_id': mediationId,
                'my_endpoint': myEndpoint,
                'my_label': myLabel,
            },
        });
    }

    /**
     * Accept a stored connection request
     * @param connId Connection identifier
     * @param myEndpoint My URL endpoint
     * @returns ConnRecord 
     * @throws ApiError
     */
    public static postConnectionsAcceptRequest(
connId: string,
myEndpoint?: string,
): CancelablePromise<ConnRecord> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/{conn_id}/accept-request',
            path: {
                'conn_id': connId,
            },
            query: {
                'my_endpoint': myEndpoint,
            },
        });
    }

    /**
     * Fetch connection remote endpoint
     * @param connId Connection identifier
     * @returns EndpointsResult 
     * @throws ApiError
     */
    public static getConnectionsEndpoints(
connId: string,
): CancelablePromise<EndpointsResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connections/{conn_id}/endpoints',
            path: {
                'conn_id': connId,
            },
        });
    }

    /**
     * Assign another connection as the inbound connection
     * @param connId Connection identifier
     * @param refId Inbound connection identifier
     * @returns ConnectionModuleResponse 
     * @throws ApiError
     */
    public static postConnectionsEstablishInbound(
connId: string,
refId: string,
): CancelablePromise<ConnectionModuleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/{conn_id}/establish-inbound/{ref_id}',
            path: {
                'conn_id': connId,
                'ref_id': refId,
            },
        });
    }

    /**
     * Fetch connection metadata
     * @param connId Connection identifier
     * @param key Key to retrieve.
     * @returns ConnectionMetadata 
     * @throws ApiError
     */
    public static getConnectionsMetadata(
connId: string,
key?: string,
): CancelablePromise<ConnectionMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connections/{conn_id}/metadata',
            path: {
                'conn_id': connId,
            },
            query: {
                'key': key,
            },
        });
    }

    /**
     * Set connection metadata
     * @param connId Connection identifier
     * @param body 
     * @returns ConnectionMetadata 
     * @throws ApiError
     */
    public static postConnectionsMetadata(
connId: string,
body?: ConnectionMetadataSetRequest,
): CancelablePromise<ConnectionMetadata> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/{conn_id}/metadata',
            path: {
                'conn_id': connId,
            },
            body: body,
        });
    }

}
