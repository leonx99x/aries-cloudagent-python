/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Schema } from './Schema';

export type SchemaSendResult = {
    /**
     * Schema definition
     */
    schema?: Schema;
    /**
     * Schema identifier
     */
    schema_id: string;
};
