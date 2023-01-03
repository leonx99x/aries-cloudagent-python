/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyPresPreview } from './IndyPresPreview';

export type PresentationProposal = {
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
    presentation_proposal: IndyPresPreview;
};
