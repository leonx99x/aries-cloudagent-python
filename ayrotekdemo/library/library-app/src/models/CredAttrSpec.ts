/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CredAttrSpec = {
    /**
     * MIME type: omit for (null) default
     */
    'mime-type'?: string | null;
    /**
     * Attribute name
     */
    name: string;
    /**
     * Attribute value: base64-encode if MIME type is present
     */
    value: string;
};
