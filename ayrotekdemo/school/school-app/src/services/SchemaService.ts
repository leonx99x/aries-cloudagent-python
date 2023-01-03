/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchemaGetResult } from '../models/SchemaGetResult';
import type { SchemasCreatedResult } from '../models/SchemasCreatedResult';
import type { SchemaSendRequest } from '../models/SchemaSendRequest';
import type { TxnOrSchemaSendResult } from '../models/TxnOrSchemaSendResult';
import { CancelablePromise } from './core/CancelablePromise';
import { request as __request } from './core/request';

import { OpenAPI } from './core/OpenAPI';

export class SchemaService {

    /**
     * Sends a schema to the ledger
     * @param body 
     * @param connId Connection identifier
     * @param createTransactionForEndorser Create Transaction For Endorser's signature
     * @returns TxnOrSchemaSendResult 
     * @throws ApiError
     */
    public static postSchemas(
body?: SchemaSendRequest,
connId?: string,
createTransactionForEndorser?: boolean,
): CancelablePromise<TxnOrSchemaSendResult> {
         
        return __request(OpenAPI, {
            method: 'POST',
            url: '/schemas',
            query: {
                'conn_id': connId,
                'create_transaction_for_endorser': createTransactionForEndorser,
            },
            body: body,
        });
    }

    /**
     * Search for matching schema that agent originated
     * @param schemaId Schema identifier
     * @param schemaIssuerDid Schema issuer DID
     * @param schemaName Schema name
     * @param schemaVersion Schema version
     * @returns SchemasCreatedResult 
     * @throws ApiError
     */
    public static getSchemasCreated(
schemaId?: string,
schemaIssuerDid?: string,
schemaName?: string,
schemaVersion?: string,
): CancelablePromise<SchemasCreatedResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schemas/created',
            query: {
                'schema_id': schemaId,
                'schema_issuer_did': schemaIssuerDid,
                'schema_name': schemaName,
                'schema_version': schemaVersion,
            },
        });
    }

    /**
     * Gets a schema from the ledger
     * @param schemaId Schema identifier
     * @returns SchemaGetResult 
     * @throws ApiError
     */
    public static getSchemas(
schemaId: string,
): CancelablePromise<SchemaGetResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schemas/{schema_id}',
            path: {
                'schema_id': schemaId,
            },
        });
    }

    /**
     * Writes a schema non-secret record to the wallet
     * @param schemaId Schema identifier
     * @returns SchemaGetResult 
     * @throws ApiError
     */
    public static postSchemasWriteRecord(
schemaId: string,
): CancelablePromise<SchemaGetResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/schemas/{schema_id}/write_record',
            path: {
                'schema_id': schemaId,
            },
        });
    }

}
