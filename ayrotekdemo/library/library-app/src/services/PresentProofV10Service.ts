/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IndyCredPrecis } from '../models/IndyCredPrecis';
import type { IndyPresSpec } from '../models/IndyPresSpec';
import type { V10PresentationCreateRequestRequest } from '../models/V10PresentationCreateRequestRequest';
import type { V10PresentationExchange } from '../models/V10PresentationExchange';
import type { V10PresentationExchangeList } from '../models/V10PresentationExchangeList';
import type { V10PresentationProblemReportRequest } from '../models/V10PresentationProblemReportRequest';
import type { V10PresentationProposalRequest } from '../models/V10PresentationProposalRequest';
import type { V10PresentationSendRequestRequest } from '../models/V10PresentationSendRequestRequest';
import type { V10PresentationSendRequestToProposal } from '../models/V10PresentationSendRequestToProposal';
import type { V10PresentProofModuleResponse } from '../models/V10PresentProofModuleResponse';

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';

export class PresentProofV10Service {

    /**
     * Creates a presentation request not bound to any proposal or connection
     * @param body 
     * @returns V10PresentationExchange 
     * @throws ApiError
     */
    public static postPresentProofCreateRequest(
body?: V10PresentationCreateRequestRequest,
): CancelablePromise<V10PresentationExchange> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/present-proof/create-request',
            body: body,
        });
    }

    /**
     * Fetch all present-proof exchange records
     * @param connectionId Connection identifier
     * @param role Role assigned in presentation exchange
     * @param state Presentation exchange state
     * @param threadId Thread identifier
     * @returns V10PresentationExchangeList 
     * @throws ApiError
     */
    public static getPresentProofRecords(
connectionId?: string,
role?: 'prover' | 'verifier',
state?: 'proposal_sent' | 'proposal_received' | 'request_sent' | 'request_received' | 'presentation_sent' | 'presentation_received' | 'verified' | 'presentation_acked' | 'abandoned',
threadId?: string,
): CancelablePromise<V10PresentationExchangeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/present-proof/records',
            query: {
                'connection_id': connectionId,
                'role': role,
                'state': state,
                'thread_id': threadId,
            },
        });
    }

    /**
     * Fetch a single presentation exchange record
     * @param presExId Presentation exchange identifier
     * @returns V10PresentationExchange 
     * @throws ApiError
     */
    public static getPresentProofRecords1(
presExId: string,
): CancelablePromise<V10PresentationExchange> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/present-proof/records/{pres_ex_id}',
            path: {
                'pres_ex_id': presExId,
            },
        });
    }

    /**
     * Remove an existing presentation exchange record
     * @param presExId Presentation exchange identifier
     * @returns V10PresentProofModuleResponse 
     * @throws ApiError
     */
    public static deletePresentProofRecords(
presExId: string,
): CancelablePromise<V10PresentProofModuleResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/present-proof/records/{pres_ex_id}',
            path: {
                'pres_ex_id': presExId,
            },
        });
    }

    /**
     * Fetch credentials for a presentation request from wallet
     * @param presExId Presentation exchange identifier
     * @param count Maximum number to retrieve
     * @param extraQuery (JSON) object mapping referents to extra WQL queries
     * @param referent Proof request referents of interest, comma-separated
     * @param start Start index
     * @returns IndyCredPrecis 
     * @throws ApiError
     */
    public static getPresentProofRecordsCredentials(
presExId: string,
count?: string,
extraQuery?: string,
referent?: string,
start?: string,
): CancelablePromise<Array<IndyCredPrecis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/present-proof/records/{pres_ex_id}/credentials',
            path: {
                'pres_ex_id': presExId,
            },
            query: {
                'count': count,
                'extra_query': extraQuery,
                'referent': referent,
                'start': start,
            },
        });
    }

    /**
     * Send a problem report for presentation exchange
     * @param presExId Presentation exchange identifier
     * @param body 
     * @returns V10PresentProofModuleResponse 
     * @throws ApiError
     */
    public static postPresentProofRecordsProblemReport(
presExId: string,
body?: V10PresentationProblemReportRequest,
): CancelablePromise<V10PresentProofModuleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/present-proof/records/{pres_ex_id}/problem-report',
            path: {
                'pres_ex_id': presExId,
            },
            body: body,
        });
    }

    /**
     * Sends a proof presentation
     * @param presExId Presentation exchange identifier
     * @param body 
     * @returns V10PresentationExchange 
     * @throws ApiError
     */
    public static postPresentProofRecordsSendPresentation(
presExId: string,
body?: IndyPresSpec,
): CancelablePromise<V10PresentationExchange> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/present-proof/records/{pres_ex_id}/send-presentation',
            path: {
                'pres_ex_id': presExId,
            },
            body: body,
        });
    }

    /**
     * Sends a presentation request in reference to a proposal
     * @param presExId Presentation exchange identifier
     * @param body 
     * @returns V10PresentationExchange 
     * @throws ApiError
     */
    public static postPresentProofRecordsSendRequest(
presExId: string,
body?: V10PresentationSendRequestToProposal,
): CancelablePromise<V10PresentationExchange> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/present-proof/records/{pres_ex_id}/send-request',
            path: {
                'pres_ex_id': presExId,
            },
            body: body,
        });
    }

    /**
     * Verify a received presentation
     * @param presExId Presentation exchange identifier
     * @returns V10PresentationExchange 
     * @throws ApiError
     */
    public static postPresentProofRecordsVerifyPresentation(
presExId: string,
): CancelablePromise<V10PresentationExchange> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/present-proof/records/{pres_ex_id}/verify-presentation',
            path: {
                'pres_ex_id': presExId,
            },
        });
    }

    /**
     * Sends a presentation proposal
     * @param body 
     * @returns V10PresentationExchange 
     * @throws ApiError
     */
    public static postPresentProofSendProposal(
body?: V10PresentationProposalRequest,
): CancelablePromise<V10PresentationExchange> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/present-proof/send-proposal',
            body: body,
        });
    }

    /**
     * Sends a free presentation request not bound to any proposal
     * @param body 
     * @returns V10PresentationExchange 
     * @throws ApiError
     */
    public static postPresentProofSendRequest(
body?: V10PresentationSendRequestRequest,
): CancelablePromise<V10PresentationExchange> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/present-proof/send-request',
            body: body,
        });
    }

}
