/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachDecoratorDataJWS } from './AttachDecoratorDataJWS';

export type AttachDecoratorData = {
    /**
     * Base64-encoded data
     */
    base64?: string;
    /**
     * JSON-serialized data
     */
    json?: any;
    /**
     * Detached Java Web Signature
     */
    jws?: AttachDecoratorDataJWS;
    /**
     * List of hypertext links to data
     */
    links?: Array<string>;
    /**
     * SHA256 hash (binhex encoded) of content
     */
    sha256?: string;
};
