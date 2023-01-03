/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntroModuleResponse } from '../models/IntroModuleResponse';

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';

export class IntroductionService {

    /**
     * Start an introduction between two connections
     * @param connId Connection identifier
     * @param targetConnectionId Target connection identifier
     * @param message Message
     * @returns IntroModuleResponse 
     * @throws ApiError
     */
    public static postConnectionsStartIntroduction(
connId: string,
targetConnectionId: string,
message?: string,
): CancelablePromise<IntroModuleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connections/{conn_id}/start-introduction',
            path: {
                'conn_id': connId,
            },
            query: {
                'target_connection_id': targetConnectionId,
                'message': message,
            },
        });
    }

}
