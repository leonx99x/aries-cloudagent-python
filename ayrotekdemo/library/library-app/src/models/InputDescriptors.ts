/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Constraints } from './Constraints';
import type { SchemasInputDescriptorFilter } from './SchemasInputDescriptorFilter';

export type InputDescriptors = {
    constraints?: Constraints;
    group?: Array<string>;
    /**
     * ID
     */
    id?: string;
    /**
     * Metadata dictionary
     */
    metadata?: any;
    /**
     * Name
     */
    name?: string;
    /**
     * Purpose
     */
    purpose?: string;
    /**
     * Accepts a list of schema or a dict containing filters like oneof_filter.
     */
    schema?: SchemasInputDescriptorFilter;
};
