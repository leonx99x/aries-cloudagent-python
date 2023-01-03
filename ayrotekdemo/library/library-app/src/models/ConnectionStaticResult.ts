/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnRecord } from './ConnRecord';

export type ConnectionStaticResult = {
    /**
     * Local DID
     */
    my_did: string;
    /**
     * My URL endpoint
     */
    my_endpoint: string;
    /**
     * My verification key
     */
    my_verkey: string;
    record: ConnRecord;
    /**
     * Remote DID
     */
    their_did: string;
    /**
     * Remote verification key
     */
    their_verkey: string;
};
