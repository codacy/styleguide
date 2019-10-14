declare module 'react-element-to-jsx-string' {

    import React from 'react';
    export interface Options {
        displayName?: (e: React.ReactElement) => string;
    }
    export default function reactElementToJsxString(elem: React.ReactElement, options?: Options): string;


}
