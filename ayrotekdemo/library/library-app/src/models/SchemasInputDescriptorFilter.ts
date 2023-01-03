/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SchemaInputDescriptor } from './SchemaInputDescriptor';

export type SchemasInputDescriptorFilter = {
    /**
     * oneOf
     */
    oneof_filter?: boolean;
    uri_groups?: Array<Array<SchemaInputDescriptor>>;
};
