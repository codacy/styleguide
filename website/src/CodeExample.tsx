import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { format } from "prettier/standalone";
import parser from "prettier/parser-babylon";
import { Highlight } from 'react-fast-highlight';

export type Language = 'xml';

export const CodeExample = ({ language = 'xml', children }: { language?: Language, children: (React.ReactElement | React.ReactElement[]) }): JSX.Element => {
    
    const foo = (e: React.ReactElement) => {
        const elementString = reactElementToJSXString(e);
        return format(
            elementString,
            { parser: "babylon", plugins: [parser], semi: true, printWidth: 120 }
        ).slice(0, -2); // HACK: Format JSX adds a `;` in the beginning or end of the string
    };

    const childrenString: string = children instanceof Array ? children.map(foo).join("\n") : foo(children);

    return (
        <React.Fragment>
            {children}
            <Highlight languages={[language]}>
                {childrenString}
            </Highlight>
        </React.Fragment>
    );
}
