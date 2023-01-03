/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AttachmentDef = {
    /**
     * Attachment identifier
     */
    id?: string;
    /**
     * Attachment type
     */
    type?: AttachmentDef.type;
};

export namespace AttachmentDef {

    /**
     * Attachment type
     */
    export enum type {
        CREDENTIAL_OFFER = 'credential-offer',
        PRESENT_PROOF = 'present-proof',
    }


}
