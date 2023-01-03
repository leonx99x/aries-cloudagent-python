/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyRequestedCredsRequestedPred = {
    /**
     * Wallet credential identifier (typically but not necessarily a UUID)
     */
    cred_id: string;
    /**
     * Epoch timestamp of interest for non-revocation proof
     */
    timestamp?: number;
};
