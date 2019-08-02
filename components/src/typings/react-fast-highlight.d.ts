declare module 'react-fast-highlight' {

    import React from 'react';
    export interface HighlightProps {
        languages?: string[];
        children: string;
    }
    export const Highlight: (props: HighlightProps) => JSX.Element;
    export { };

}
