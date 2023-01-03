/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyCredInfo } from './IndyCredInfo';
import type { IndyNonRevocationInterval } from './IndyNonRevocationInterval';

export type IndyCredPrecis = {
    /**
     * Credential info
     */
    cred_info?: IndyCredInfo;
    /**
     * Non-revocation interval from presentation request
     */
    interval?: IndyNonRevocationInterval;
    presentation_referents?: Array<string>;
};
