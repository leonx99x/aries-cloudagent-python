/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IndyRequestedCredsRequestedAttr = {
    /**
     * Wallet credential identifier (typically but not necessarily a UUID)
     */
    cred_id: string;
    /**
     * Whether to reveal attribute in proof (default true)
     */
    revealed?: boolean;
};
