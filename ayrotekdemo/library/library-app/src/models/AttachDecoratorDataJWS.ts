/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachDecoratorData1JWS } from './AttachDecoratorData1JWS';
import type { AttachDecoratorDataJWSHeader } from './AttachDecoratorDataJWSHeader';

export type AttachDecoratorDataJWS = {
    header?: AttachDecoratorDataJWSHeader;
    /**
     * protected JWS header
     */
    protected?: string;
    /**
     * signature
     */
    signature?: string;
    /**
     * List of signatures
     */
    signatures?: Array<AttachDecoratorData1JWS>;
};
