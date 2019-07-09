import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { format } from "prettier/standalone";
import parser from "prettier/parser-babylon";
import { Highlight } from 'react-fast-highlight';

export type Language = 'xml';

export const CodeExample = ({ language = 'xml', children }: { language?: Language, children: React.ReactElement }): JSX.Element => {
    return (
        <React.Fragment>
            {children}
            <Highlight languages={[language]}>
                {
                    format(
                        reactElementToJSXString(children),
                        { parser: "babylon", plugins: [parser], semi: true, printWidth: 120 }
                    )
                        .slice(0, -2) // HACK: Format JSX adds a `;` in the beginning or end of the string
                }
            </Highlight>
        </React.Fragment>
    );
}
