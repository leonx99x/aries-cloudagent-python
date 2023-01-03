/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachDecorator } from './AttachDecorator';

export type PresentationRequest = {
    /**
     * Message identifier
     */
    '@id'?: string;
    /**
     * Message type
     */
    readonly '@type'?: string;
    /**
     * Human-readable comment
     */
    comment?: string | null;
    'request_presentations~attach': Array<AttachDecorator>;
};
