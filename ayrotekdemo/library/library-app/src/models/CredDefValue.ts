/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CredDefValuePrimary } from './CredDefValuePrimary';
import type { CredDefValueRevocation } from './CredDefValueRevocation';

export type CredDefValue = {
    /**
     * Primary value for credential definition
     */
    primary?: CredDefValuePrimary;
    /**
     * Revocation value for credential definition
     */
    revocation?: CredDefValueRevocation;
};
