import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Highlight } from 'react-fast-highlight';

export const CodeExample = ({ children }: { children: (React.ReactElement | React.ReactElement[]) }) => {

    const elementToString = (element: React.ReactElement) => {
        return reactElementToJSXString(element, {
            displayName: (elem: React.ReactElement) => {
                const displayName =
                    // @ts-ignore
                    elem.type.displayName ||
                    // @ts-ignore
                    (elem.type.name !== '_default' ? elem.type.name : null) || // Function name
                    (typeof elem.type === 'function' // Function without a name, you should provide one
                        ? 'Function Without Display Name'
                        : elem.type);
                // HACK: Remove wrapper Uncontrolled(...) from displayName
                return displayName.replace(new RegExp("Uncontrolled\\((.*)\\)"), '$1')
            }
        });
    };

    const childrenString = React.Children.toArray(children).map(elementToString).join("\n");

    return (
        <React.Fragment>
            {children}
            <Highlight>
                {childrenString}
            </Highlight>
        </React.Fragment>
    );
}
