/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
    ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: OpenAPIConfig = {
    BASE: process.env.REACT_APP_BASE_URL ?? 'http://localhost:3000',
    VERSION: '0.7.5',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: process.env.REACT_APP_TOKEN || undefined,
    USERNAME: process.env.REACT_APP_USERNAME ||  undefined,
    PASSWORD: process.env.REACT_APP_PASSWORD ||  undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};
