/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClaimFormat } from './ClaimFormat';
import type { InputDescriptors } from './InputDescriptors';
import type { SubmissionRequirements } from './SubmissionRequirements';

export type PresentationDefinition = {
    format?: ClaimFormat;
    /**
     * Unique Resource Identifier
     */
    id?: string;
    input_descriptors?: Array<InputDescriptors>;
    /**
     * Human-friendly name that describes what the presentation definition pertains to
     */
    name?: string;
    /**
     * Describes the purpose for which the Presentation Definition's inputs are being requested
     */
    purpose?: string;
    submission_requirements?: Array<SubmissionRequirements>;
};
