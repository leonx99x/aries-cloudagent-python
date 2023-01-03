/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachDecoratorData } from './AttachDecoratorData';

export type AttachDecorator = {
    /**
     * Attachment identifier
     */
    '@id'?: string;
    /**
     * Byte count of data included by reference
     */
    byte_count?: number;
    data: AttachDecoratorData;
    /**
     * Human-readable description of content
     */
    description?: string;
    /**
     * File name
     */
    filename?: string;
    /**
     * Hint regarding last modification datetime, in ISO-8601 format
     */
    lastmod_time?: string;
    /**
     * MIME type
     */
    'mime-type'?: string;
};
