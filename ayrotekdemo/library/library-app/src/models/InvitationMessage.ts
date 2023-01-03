/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachDecorator } from './AttachDecorator';

export type InvitationMessage = {
    /**
     * Message identifier
     */
    '@id'?: string;
    /**
     * Message type
     */
    '@type'?: string;
    /**
     * List of mime type in order of preference
     */
    accept?: Array<string>;
    handshake_protocols?: Array<string>;
    /**
     * Optional label
     */
    label?: string;
    /**
     * Optional request attachment
     */
    'requests~attach'?: Array<AttachDecorator>;
    services?: Array<any>;
};
