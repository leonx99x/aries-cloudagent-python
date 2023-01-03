/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyPresPreview } from './IndyPresPreview';

export type V10PresentationProposalRequest = {
    /**
     * Whether to respond automatically to presentation requests, building and presenting requested proof
     */
    auto_present?: boolean;
    /**
     * Human-readable comment
     */
    comment?: string | null;
    /**
     * Connection identifier
     */
    connection_id: string;
    presentation_proposal: IndyPresPreview;
    /**
     * Whether to trace event (default false)
     */
    trace?: boolean;
};
