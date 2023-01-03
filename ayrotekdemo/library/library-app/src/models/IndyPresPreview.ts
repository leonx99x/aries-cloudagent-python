/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndyPresAttrSpec } from './IndyPresAttrSpec';
import type { IndyPresPredSpec } from './IndyPresPredSpec';

export type IndyPresPreview = {
    /**
     * Message type identifier
     */
    '@type'?: string;
    attributes: Array<IndyPresAttrSpec>;
    predicates: Array<IndyPresPredSpec>;
};
