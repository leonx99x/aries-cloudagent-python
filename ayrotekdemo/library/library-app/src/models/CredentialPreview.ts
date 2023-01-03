/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CredAttrSpec } from './CredAttrSpec';

export type CredentialPreview = {
    /**
     * Message type identifier
     */
    '@type'?: string;
    attributes: Array<CredAttrSpec>;
};
