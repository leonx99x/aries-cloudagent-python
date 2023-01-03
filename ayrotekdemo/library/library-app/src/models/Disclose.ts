/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProtocolDescriptor } from './ProtocolDescriptor';

export type Disclose = {
    /**
     * Message identifier
     */
    '@id'?: string;
    /**
     * Message type
     */
    readonly '@type'?: string;
    /**
     * List of protocol descriptors
     */
    protocols: Array<ProtocolDescriptor>;
};
