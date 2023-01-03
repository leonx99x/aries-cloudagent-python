/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConnectionStaticRequest = {
    /**
     * Alias to assign to this connection
     */
    alias?: string;
    /**
     * Local DID
     */
    my_did?: string;
    /**
     * Seed to use for the local DID
     */
    my_seed?: string;
    /**
     * Remote DID
     */
    their_did?: string;
    /**
     * URL endpoint for other party
     */
    their_endpoint?: string;
    /**
     * Other party's label for this connection
     */
    their_label?: string;
    /**
     * Seed to use for the remote DID
     */
    their_seed?: string;
    /**
     * Remote verification key
     */
    their_verkey?: string;
};
