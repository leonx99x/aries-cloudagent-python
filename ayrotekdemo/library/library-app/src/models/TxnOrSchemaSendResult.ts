/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SchemaSendResult } from './SchemaSendResult';
import type { TransactionRecord } from './TransactionRecord';

export type TxnOrSchemaSendResult = {
    /**
     * Content sent
     */
    sent?: SchemaSendResult;
    /**
     * Schema transaction to endorse
     */
    txn?: TransactionRecord;
};
