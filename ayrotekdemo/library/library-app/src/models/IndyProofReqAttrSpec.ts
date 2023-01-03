/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofReqAttrSpecNonRevoked } from './IndyProofReqAttrSpecNonRevoked';

export type IndyProofReqAttrSpec = {
    /**
     * Attribute name
     */
    name?: string;
    /**
     * Attribute name group
     */
    names?: Array<string>;
    non_revoked?: IndyProofReqAttrSpecNonRevoked | null;
    /**
     * If present, credential must satisfy one of given restrictions: specify schema_id, schema_issuer_did, schema_name, schema_version, issuer_did, cred_def_id, and/or attr::<attribute-name>::value where <attribute-name> represents a credential attribute name
     */
    restrictions?: Array<Record<string, string>>;
};
