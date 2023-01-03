/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DIFHolder = {
    /**
     * Preference
     */
    directive?: DIFHolder.directive;
    field_id?: Array<string>;
};

export namespace DIFHolder {

    /**
     * Preference
     */
    export enum directive {
        REQUIRED = 'required',
        PREFERRED = 'preferred',
    }


}
