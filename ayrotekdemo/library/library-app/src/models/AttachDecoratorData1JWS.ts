/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachDecoratorDataJWSHeader } from './AttachDecoratorDataJWSHeader';

export type AttachDecoratorData1JWS = {
    header: AttachDecoratorDataJWSHeader;
    /**
     * protected JWS header
     */
    protected?: string;
    /**
     * signature
     */
    signature: string;
};
