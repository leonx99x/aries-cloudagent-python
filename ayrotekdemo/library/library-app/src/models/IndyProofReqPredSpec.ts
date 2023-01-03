/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyProofReqPredSpecNonRevoked } from './IndyProofReqPredSpecNonRevoked';

export type IndyProofReqPredSpec = {
    /**
     * Attribute name
     */
    name: string;
    non_revoked?: IndyProofReqPredSpecNonRevoked | null;
    /**
     * Predicate type ('<', '<=', '>=', or '>')
     */
    p_type: IndyProofReqPredSpec.p_type;
    /**
     * Threshold value
     */
    p_value: number;
    /**
     * If present, credential must satisfy one of given restrictions: specify schema_id, schema_issuer_did, schema_name, schema_version, issuer_did, cred_def_id, and/or attr::<attribute-name>::value where <attribute-name> represents a credential attribute name
     */
    restrictions?: Array<Record<string, string>>;
};

export namespace IndyProofReqPredSpec {

    /**
     * Predicate type ('<', '<=', '>=', or '>')
     */
    export enum p_type {
        SMALLER = '<',
        SMALLEROREQUAL = '<=',
        BIGGEROREQUAL = '>=',
        BIGGER = '>',
    }


}
