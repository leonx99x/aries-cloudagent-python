/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachDecorator } from './AttachDecorator';
import type { CredentialPreview } from './CredentialPreview';

export type CredentialOffer = {
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
    credential_preview?: CredentialPreview;
    'offers~attach': Array<AttachDecorator>;
};
