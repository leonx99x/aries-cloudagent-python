/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Disclose } from './Disclose';
import type { Query } from './Query';

export type V10DiscoveryRecord = {
    /**
     * Connection identifier
     */
    connection_id?: string;
    /**
     * Time of record creation
     */
    created_at?: string;
    /**
     * Disclose message
     */
    disclose?: Disclose;
    /**
     * Credential exchange identifier
     */
    discovery_exchange_id?: string;
    /**
     * Query message
     */
    query_msg?: Query;
    /**
     * Current record state
     */
    state?: string;
    /**
     * Thread identifier
     */
    thread_id?: string;
    /**
     * Record trace information, based on agent configuration
     */
    trace?: boolean;
    /**
     * Time of last record update
     */
    updated_at?: string;
};
