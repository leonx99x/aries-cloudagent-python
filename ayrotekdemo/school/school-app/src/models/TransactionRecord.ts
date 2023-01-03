/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransactionRecord = {
    /**
     * Transaction type
     */
    _type?: string;
    /**
     * The connection identifier for thie particular transaction record
     */
    connection_id?: string;
    /**
     * Time of record creation
     */
    created_at?: string;
    /**
     * If True, Endorser will write the transaction after endorsing it
     */
    endorser_write_txn?: boolean;
    formats?: Array<Record<string, string>>;
    messages_attach?: Array<any>;
    meta_data?: any;
    signature_request?: Array<any>;
    signature_response?: Array<any>;
    /**
     * Current record state
     */
    state?: string;
    /**
     * Thread Identifier
     */
    thread_id?: string;
    timing?: any;
    /**
     * Record trace information, based on agent configuration
     */
    trace?: boolean;
    /**
     * Transaction identifier
     */
    transaction_id?: string;
    /**
     * Time of last record update
     */
    updated_at?: string;
};
